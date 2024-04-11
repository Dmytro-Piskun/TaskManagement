import TaskStats from "@/components/TaskStats";
import TimeHeading from "@/components/TimeHeading";

export default function Home() {
  return (<>
    <header className="flex justify-between">
      <TimeHeading />
      <TaskStats/>
    </header>
    <main>
{/* Calendar */}
{/* Plans for day */}
{/* Important tasks */}
{/* Task completion graph */}
    </main>
  </>
  );
}
