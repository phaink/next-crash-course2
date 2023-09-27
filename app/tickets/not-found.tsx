import Link from "next/link";
import { headers } from 'next/headers'

export default function NotFound() {
  const headersList = headers()
  const domain = headersList.get('host')

  console.log('====================================');
  console.log(headersList);
  console.log('====================================');
  
  return (
    <main className="text-center">
      <h2 className="text-3xl">Ticket not found</h2>
      <p>We could not find the ticket</p>
      <p>
        Go back to the <Link href="/tickets">Tickets</Link>
        
      </p>
      <p>{domain}</p>
      <p></p>
    </main>
  );
}
