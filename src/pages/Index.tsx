import Header from "@/components/Header";
import QuestionGenerator from "@/components/QuestionGenerator";
import StudyStats from "@/components/StudyStats";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 space-y-6">
        <Header />
        <StudyStats />
        <QuestionGenerator />
      </div>
    </div>
  );
};

export default Index;
