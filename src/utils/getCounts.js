export const getCounts = (idps) => {
  let activeCount = 0;
  let overdueCount = 0;
  let completedCount = 0;

  idps.forEach((obj) => {
    switch (obj.status) {
      case "active":
        activeCount++;
        break;
      case "overdue":
        overdueCount++;
        break;
      case "completed_approval":
        completedCount++;
        break;
      default:
        break;
    }
  });

  return { activeCount, overdueCount, completedCount };
};