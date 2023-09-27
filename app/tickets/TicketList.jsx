import Link from "next/link";

async function getTickets() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  try {
    const resp = await fetch("http://localhost:4000/tickets", {
      next: {
        resolution: 0,
      },
    });
    return resp.json();
  } catch (error) {
    return [];
  }
}

export default async function TicketLickt() {
  const tickets = await getTickets();
  return (
    <div>
      {tickets &&
        tickets.map((ticket) => (
          <div key={ticket.id} className="card my-5">
            <Link href={`/tickets/${ticket.id}`}>
              <h3> {ticket.title} </h3>
              <p> {ticket.body.slice(0, 200)}... </p>
              <div className={`pill ${ticket.priority}`}>
                {" "}
                {ticket.priority} priority
              </div>
            </Link>
          </div>
        ))}
      {tickets.length === 0 && <p>There are no open tickets</p>}
    </div>
  );
}
