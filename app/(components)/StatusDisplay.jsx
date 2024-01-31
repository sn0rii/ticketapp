const StatusDispaly = ({ status }) => {
  const getColor = (status) => {
    let color = "bg-slate-700";
    switch (status.toLowerCase()) {
      case "done":
        color = "bg-green-200";
        return color;
      case "started":
        color = "bg-yellow-200";
        return color;
      case "not started":
        color = "bg-red-300";
        return color;
    }
    return color;
  };

  return (
    <span
      className={`  inline-block px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(
        status
      )}  rounded-full`}
    >
      {status}
    </span>
  );
};
export default StatusDispaly;
