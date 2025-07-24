import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Brain, Target, TrendingUp } from "lucide-react";

export default function StudyStats() {
  const stats = {
    questionsGenerated: 47,
    studySessionsCompleted: 12,
    averageScore: 85,
    weeklyProgress: 78,
    topicsMastered: 8,
    totalTopics: 12
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Questions Generated</CardTitle>
          <Brain className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.questionsGenerated}</div>
          <p className="text-xs text-muted-foreground">
            +12 from last session
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Study Sessions</CardTitle>
          <BookOpen className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.studySessionsCompleted}</div>
          <p className="text-xs text-muted-foreground">
            +3 this week
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Score</CardTitle>
          <Target className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.averageScore}%</div>
          <p className="text-xs text-muted-foreground">
            +5% improvement
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Weekly Progress</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.weeklyProgress}%</div>
          <Progress value={stats.weeklyProgress} className="mt-2" />
        </CardContent>
      </Card>

      <Card className="md:col-span-2 lg:col-span-4">
        <CardHeader>
          <CardTitle>Topics Mastery</CardTitle>
          <CardDescription>Your progress across different subjects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Topics Mastered</span>
              <Badge variant="secondary">{stats.topicsMastered}/{stats.totalTopics}</Badge>
            </div>
            <Progress value={(stats.topicsMastered / stats.totalTopics) * 100} />
            
            <div className="grid gap-3 mt-4 md:grid-cols-2">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Mathematics</span>
                  <Badge className="bg-green-100 text-green-800">Mastered</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Physics</span>
                  <Badge className="bg-yellow-100 text-yellow-800">In Progress</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Chemistry</span>
                  <Badge className="bg-green-100 text-green-800">Mastered</Badge>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Biology</span>
                  <Badge className="bg-yellow-100 text-yellow-800">In Progress</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span>History</span>
                  <Badge className="bg-green-100 text-green-800">Mastered</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Literature</span>
                  <Badge className="bg-red-100 text-red-800">Needs Work</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}