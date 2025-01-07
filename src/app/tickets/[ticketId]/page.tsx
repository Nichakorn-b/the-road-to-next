import Link from "next/link";

import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { ticketsPath } from "@/paths";

// type TicketPageProps = {
//   params: Promise<{
//     ticketId: string;
//   }>;
// };

//Change the type of TicketPageProps to handle the possibility of params being asynchronous. 
type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }> | {
    ticketId: string;
  };
};


const TicketPage = async ({ params }: TicketPageProps) => {
  const resolvedParams = await params; // Await params if it's a Promise
  const ticket = await getTicket(resolvedParams.ticketId)


  if (!ticket) {
    return (
      <Placeholder
        label="Ticket not found"
        button={
          <Button asChild variant="outline">
            <Link href={ticketsPath()}>Go to Tickets</Link>
          </Button>
        }
      />
    );
  }

  return (
    <div className="flex justify-center animate-fade-from-top">
      <TicketItem ticket={ticket} isDetail={true}/>
    </div>
  );
};

export default TicketPage;