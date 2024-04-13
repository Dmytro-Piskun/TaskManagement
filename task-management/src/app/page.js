import TaskStats from "@/components/home/TaskStats";
import TimeHeading from "@/components/home/TimeHeading";
import TodaysTasks from "@/components/home/TodaysTasksCard";
import TodaysActivities from "@/components/home/TodaysActivitiesCard";
import TaskCompletionGraph from "@/components/home/TaskCompletionGraphCard";
import ActivityCalendar from "@/components/home/ActivityCalendarCard/ActivityCalendarCard";
import CardContainer from "@/components/home/CardContainer";
import calendarIcon from '@/assets/nav-icons/calendar.svg'


export default function Home() {
  return (<>
    <header className="flex justify-between">
      <TimeHeading />
      <TaskStats />
    </header>
    <main className="mt-10 g">
      <CardContainer title={"Calendar"} subtitle={"How busy ur days are"} link={"/calendar"} linkIcon={calendarIcon}>
        <ActivityCalendar />
      </CardContainer>


      <TodaysTasks />
      <TodaysActivities />
      <TaskCompletionGraph />
    </main>
  </>
  );
}
