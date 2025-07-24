import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { BookOpen, Brain, Lightbulb, Target, Zap } from "lucide-react";

interface Question {
  id: string;
  question: string;
  type: 'multiple-choice' | 'short-answer' | 'essay' | 'true-false';
  difficulty: 'easy' | 'medium' | 'hard';
  options?: string[];
  answer?: string;
  explanation?: string;
}

export default function QuestionGenerator() {
  const [studyMaterial, setStudyMaterial] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generateQuestions = async () => {
    if (!studyMaterial.trim()) {
      toast({
        title: "Please add study material",
        description: "Enter some content to generate questions from.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI question generation
    setTimeout(() => {
      const newQuestions: Question[] = [
        {
          id: "1",
          question: "What is the main concept discussed in this material?",
          type: "short-answer",
          difficulty: "medium",
          answer: "Based on the provided content...",
          explanation: "This question tests comprehension of key concepts."
        },
        {
          id: "2",
          question: "Which of the following best describes the topic?",
          type: "multiple-choice",
          difficulty: "easy",
          options: ["Option A", "Option B", "Option C", "Option D"],
          answer: "Option B",
          explanation: "This tests recognition of main ideas."
        },
        {
          id: "3",
          question: "Analyze and explain the significance of the concepts presented.",
          type: "essay",
          difficulty: "hard",
          explanation: "This encourages deeper critical thinking."
        },
        {
          id: "4",
          question: "The information presented is factually accurate.",
          type: "true-false",
          difficulty: "easy",
          answer: "True",
          explanation: "Tests basic comprehension."
        }
      ];
      
      setQuestions(newQuestions);
      setIsGenerating(false);
      
      toast({
        title: "Questions generated successfully!",
        description: `Generated ${newQuestions.length} questions from your study material.`,
      });
    }, 2000);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'hard': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'multiple-choice': return <Target className="w-4 h-4" />;
      case 'short-answer': return <Brain className="w-4 h-4" />;
      case 'essay': return <BookOpen className="w-4 h-4" />;
      case 'true-false': return <Zap className="w-4 h-4" />;
      default: return <Lightbulb className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            Study Material Input
          </CardTitle>
          <CardDescription>
            Paste your study material below to generate practice questions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Paste your study material, notes, or textbook content here..."
            value={studyMaterial}
            onChange={(e) => setStudyMaterial(e.target.value)}
            className="min-h-[200px]"
          />
          <Button 
            onClick={generateQuestions} 
            disabled={isGenerating}
            className="w-full"
          >
            {isGenerating ? (
              <>
                <Brain className="w-4 h-4 mr-2 animate-spin" />
                Generating Questions...
              </>
            ) : (
              <>
                <Lightbulb className="w-4 h-4 mr-2" />
                Generate Questions
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {questions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-accent" />
              Generated Questions ({questions.length})
            </CardTitle>
            <CardDescription>
              Practice questions generated from your study material
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {questions.map((question, index) => (
              <div key={question.id} className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-muted-foreground">
                        Question {index + 1}
                      </span>
                      <Badge className={getDifficultyColor(question.difficulty)}>
                        {question.difficulty}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        {getTypeIcon(question.type)}
                        {question.type.replace('-', ' ')}
                      </Badge>
                    </div>
                    <p className="text-lg font-medium">{question.question}</p>
                    
                    {question.options && (
                      <div className="space-y-1 mt-3">
                        {question.options.map((option, optionIndex) => (
                          <div 
                            key={optionIndex}
                            className="p-2 rounded border border-border hover:bg-muted/50 transition-colors"
                          >
                            {String.fromCharCode(65 + optionIndex)}. {option}
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {question.answer && (
                      <div className="mt-3 p-3 bg-accent/10 rounded-lg border border-accent/20">
                        <p className="text-sm font-medium text-accent mb-1">Answer:</p>
                        <p className="text-sm">{question.answer}</p>
                      </div>
                    )}
                    
                    {question.explanation && (
                      <div className="mt-2 p-3 bg-muted/50 rounded-lg">
                        <p className="text-sm font-medium mb-1">Explanation:</p>
                        <p className="text-sm text-muted-foreground">{question.explanation}</p>
                      </div>
                    )}
                  </div>
                </div>
                
                {index < questions.length - 1 && <Separator className="mt-4" />}
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}