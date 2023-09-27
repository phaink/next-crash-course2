import { NotFound } from "next/navigation";
export const dynamicParams = true;
export async function generateStaticParams() {
  const resp = await fetch("http://localhost:4000/tickets");
  const tickets = await resp.json();
  return tickets.map((ticket) => ({ id: ticket.id }));
}

async function getTicket(id) {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  try {
    const resp = await fetch(`http://localhost:4000/tickets/${id}`, {
      next: { revalidate: 0 },
    });

    return resp.json();
  } catch (error) {
    console.error(error);
    return error;
  }
}

export default async function TicketDetail({ params }) {
  const ticket = await getTicket(params.id);

  return (
    <main>
      <nav>
        <h2>Ticket Detail</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title} </h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {" "}
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}
