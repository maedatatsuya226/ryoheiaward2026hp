import { Hero } from "@/components/sections/Hero";
import { EventAnticipation } from "@/components/sections/EventAnticipation";
import { About } from "@/components/sections/About";
import { RyoheiProfile } from "@/components/sections/RyoheiProfile";
import { Actions } from "@/components/sections/Actions";
import { History } from "@/components/sections/History";
import { EventInfo } from "@/components/sections/EventInfo";
import { Program } from "@/components/sections/Program";
import { AwardeesTeaser } from "@/components/sections/AwardeesTeaser";
import { Access } from "@/components/sections/Access";
import { Closing } from "@/components/sections/Closing";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EventAnticipation />
      <About />
      <RyoheiProfile />
      <Actions />
      <History />
      <EventInfo />
      <Program />
      <AwardeesTeaser />
      <Access />
      <Closing />
    </>
  );
}
