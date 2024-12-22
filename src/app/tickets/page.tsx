import { initialTickets } from "@/data";
import Link from "next/link";
import { ticketPath } from "@/paths";

const TicketPage = () => {
  return (
    <div>
      {initialTickets.map((ticket) => (
        <div>
          {" "}
          <h2 className="text-lg">{ticket.title}</h2>
          <Link href={ticketPath(ticket.id)} className="text-sm underline">View</Link>
        </div>
      ))}
    </div>
  );
};

export default TicketPage;
