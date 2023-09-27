import TicketList from "./TicketList";
import { Suspense } from "react";
import Loading from "./loading";

export default function Tickets() {
  return (
    <>
      <h1>Tickets</h1>

      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </>
  );
}
