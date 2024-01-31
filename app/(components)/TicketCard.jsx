import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = ({ ticket }) => {
  const formatTimestamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("pl-PL", options);

    return formattedDate;
  };

  return (
    <div className="flex flex-col p-3 m-2 rounded-md shadow-lg bg-card hover:bg-card-hover ">
      <div className="flex mb-3 ">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4>{ticket.title}</h4>
      <hr className="h-px mb-2 border-0 bg-page " />
      <p className="whitespace-pre-wrap">{ticket.description}</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="my-1 text-xs">{formatTimestamp(ticket.createdAt)}</p>
          <ProgressDisplay progress={ticket.progress} />
        </div>
        <div className="flex items-end ml-auto">
          <StatusDisplay status={ticket.status} />
        </div>
      </div>
    </div>
  );
};
export default TicketCard;
