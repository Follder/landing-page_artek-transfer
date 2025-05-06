const createTrainItem = (station, timeArrived, timaAway, isBold) => {
  const line = document.createElement("div");
  line.classList.add("train__line");

  if (isBold) {
    line.classList.add("train__line_bold");
  }

  const stationItem = document.createElement("div");
  stationItem.classList.add("train__line-item-station");
  stationItem.textContent = station;
  line.append(stationItem);

  const arrivedItem = document.createElement("div");
  arrivedItem.classList.add("train__line-item");
  arrivedItem.textContent = timeArrived;
  line.append(arrivedItem);

  const awayItem = document.createElement("div");
  awayItem.classList.add("train__line-item");
  awayItem.textContent = timaAway;
  line.append(awayItem);

  return line;
};

const createTrainTable = (
  title,
  [station1, to1, from1, isBold1],
  [station2, to2, from2, isBold2],
  [station3, to3, from3, isBold3],
  [station4, to4, from4, isBold4],
  [station5, to5, from5, isBold5],
  [station6, to6, from6, isBold6],
  [station7, to7, from7, isBold7],
  [station8, to8, from8, isBold8],
  [station9, to9, from9, isBold9],
  [station10, to10, from10, isBold10]
) => {
  const table = document.createElement("div");
  table.classList.add("train");

  const tableTitle = document.createElement("div");
  tableTitle.classList.add("train__title");
  tableTitle.textContent = title;
  table.append(tableTitle);

  const headerTable = document.createElement("div");
  headerTable.classList.add("train__header");

  const headerStation = document.createElement("div");
  headerStation.classList.add("train__header-item");
  headerStation.textContent = "Станція";
  headerTable.append(headerStation);

  const headerArrived = document.createElement("div");
  headerArrived.classList.add("train__header-item");
  headerArrived.textContent = "Час прибуття";
  headerTable.append(headerArrived);

  const headerAway = document.createElement("div");
  headerAway.classList.add("train__header-item");
  headerAway.textContent = `Час \n відпр.`;
  headerTable.append(headerAway);

  table.append(headerTable);

  table.append(createTrainItem(station1, to1, from1, isBold1));
  table.append(createTrainItem(station2, to2, from2, isBold2));
  table.append(createTrainItem(station3, to3, from3, isBold3));
  table.append(createTrainItem(station4, to4, from4, isBold4));
  table.append(createTrainItem(station5, to5, from5, isBold5));
  table.append(createTrainItem(station6, to6, from6, isBold6));
  table.append(createTrainItem(station7, to7, from7, isBold7));
  table.append(createTrainItem(station8, to8, from8, isBold8));
  table.append(createTrainItem(station9, to9, from9, isBold9));
  table.append(createTrainItem(station10, to10, from10, isBold10));

  const wrapper = document.createElement("div");
  wrapper.append(table);

  return wrapper.innerHTML;
};

export default createTrainTable;