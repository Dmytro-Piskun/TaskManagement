import TaskStats from "@/components/home/TaskStats";
import TimeHeading from "@/components/home/TimeHeading";
import TodaysTasks from "@/components/home/TodaysTasksCard";
import TodaysActivities from "@/components/home/TodaysActivitiesCard";
import TaskCompletionGraph from "@/components/home/TaskCompletionGraphCard";
import ActivityCalendar from "@/components/home/ActivityCalendarCard";
import CardContainer from "@/components/home/CardContainer";

export default function Home() {
  return (<>
    <header className="flex justify-between">
      <TimeHeading />
      <TaskStats/>
    </header>
    <main className="mt-10 g">
      <CardContainer title={"Calendar"} subtitle={"How busy ur days are"}>
       <div className="w-96">If value or defaultValue contains a valid date, this date will be used to choose which month to render in the day view and which year to render in the month view. If both value and defaultValue contain no valid date, the component will try to find a month and year that satisfies the validation rules.
You can override this date using the referenceDate</div>
      </CardContainer>

      <CardContainer title={"Calendar"} subtitle={"How busy ur days are"}>
              <ActivityCalendar/>
      </CardContainer>


      <TodaysTasks/>
      <TodaysActivities/> 
      <TaskCompletionGraph/>
    </main>
  </>
  );
}
