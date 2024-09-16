const flightsData = [
  {
    "departure": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "arrival": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "departure_time": "2024-09-06T01:45:47",
    "arrival_time": "2024-09-06T15:45:47",
    "price": 957,
    "airline": "British Airways"
  },
  {
    "departure": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "arrival": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "departure_time": "2024-09-23T16:12:28",
    "arrival_time": "2024-09-23T23:12:28",
    "price": 1059,
    "airline": "ANA"
  },
  {
    "departure": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "arrival": {
      "airport": "NRT",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-14T21:03:04",
    "arrival_time": "2024-09-15T05:03:04",
    "price": 424,
    "airline": "ANA"
  },
  {
    "departure": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "arrival": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "departure_time": "2024-09-07T18:38:52",
    "arrival_time": "2024-09-07T20:38:52",
    "price": 346,
    "airline": "Singapore Airlines"
  },
  {
    "departure": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "arrival": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-17T19:03:12",
    "arrival_time": "2024-09-17T23:03:12",
    "price": 637,
    "airline": "Emirates"
  },
  {
    "departure": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "arrival": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "departure_time": "2024-09-04T06:33:52",
    "arrival_time": "2024-09-04T16:33:52",
    "price": 838,
    "airline": "ANA"
  },
  {
    "departure": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "arrival": {
      "airport": "NRT",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-26T21:37:25",
    "arrival_time": "2024-09-27T02:37:25",
    "price": 1003,
    "airline": "Emirates"
  },
  {
    "departure": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "arrival": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "departure_time": "2024-09-03T13:52:45",
    "arrival_time": "2024-09-04T01:52:45",
    "price": 1038,
    "airline": "Singapore Airlines"
  },
  {
    "departure": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "arrival": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "departure_time": "2024-09-28T23:08:55",
    "arrival_time": "2024-09-29T01:08:55",
    "price": 1456,
    "airline": "Qantas"
  },
  {
    "departure": {
      "airport": "NRT",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "departure_time": "2024-09-18T14:59:57",
    "arrival_time": "2024-09-18T17:59:57",
    "price": 553,
    "airline": "ANA"
  },
  {
    "departure": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "arrival": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "departure_time": "2024-09-01T05:08:24",
    "arrival_time": "2024-09-01T09:08:24",
    "price": 1498,
    "airline": "Air France"
  },
  {
    "departure": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "arrival": {
      "airport": "NRT",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-20T14:45:49",
    "arrival_time": "2024-09-20T16:45:49",
    "price": 1353,
    "airline": "Delta"
  },
  {
    "departure": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "arrival": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "departure_time": "2024-09-28T12:29:20",
    "arrival_time": "2024-09-28T14:29:20",
    "price": 354,
    "airline": "British Airways"
  },
  {
    "departure": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "arrival": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "departure_time": "2024-09-08T13:32:33",
    "arrival_time": "2024-09-09T04:32:33",
    "price": 932,
    "airline": "United Airlines"
  },
  {
    "departure": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "arrival": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-03T12:44:49",
    "arrival_time": "2024-09-03T21:44:49",
    "price": 766,
    "airline": "Singapore Airlines"
  },
  {
    "departure": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "departure_time": "2024-09-02T10:00:08",
    "arrival_time": "2024-09-02T16:00:08",
    "price": 106,
    "airline": "Delta"
  },
  {
    "departure": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "arrival": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "departure_time": "2024-09-28T00:20:13",
    "arrival_time": "2024-09-28T12:20:13",
    "price": 109,
    "airline": "Singapore Airlines"
  },
  {
    "departure": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "arrival": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "departure_time": "2024-09-06T13:09:09",
    "arrival_time": "2024-09-07T02:09:09",
    "price": 465,
    "airline": "United Airlines"
  },
  {
    "departure": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "arrival": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "departure_time": "2024-09-19T15:47:41",
    "arrival_time": "2024-09-20T05:47:41",
    "price": 1056,
    "airline": "Delta"
  },
  {
    "departure": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "arrival": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-17T06:47:40",
    "arrival_time": "2024-09-17T14:47:40",
    "price": 613,
    "airline": "United Airlines"
  },
  {
    "departure": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "arrival": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "departure_time": "2024-09-02T17:49:03",
    "arrival_time": "2024-09-03T07:49:03",
    "price": 1369,
    "airline": "Qantas"
  },
  {
    "departure": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "arrival": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "departure_time": "2024-09-08T16:19:36",
    "arrival_time": "2024-09-08T23:19:36",
    "price": 867,
    "airline": "Delta"
  },
  {
    "departure": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "arrival": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "departure_time": "2024-09-11T03:22:31",
    "arrival_time": "2024-09-11T05:22:31",
    "price": 1057,
    "airline": "Delta"
  },
  {
    "departure": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "arrival": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "departure_time": "2024-09-10T12:55:50",
    "arrival_time": "2024-09-10T23:55:50",
    "price": 552,
    "airline": "Singapore Airlines"
  },
  {
    "departure": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "arrival": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-28T14:37:20",
    "arrival_time": "2024-09-29T05:37:20",
    "price": 852,
    "airline": "American Airlines"
  },
  {
    "departure": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "arrival": {
      "airport": "NRT",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-28T02:57:23",
    "arrival_time": "2024-09-28T08:57:23",
    "price": 890,
    "airline": "Qantas"
  },
  {
    "departure": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "arrival": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "departure_time": "2024-09-20T04:18:07",
    "arrival_time": "2024-09-20T19:18:07",
    "price": 1340,
    "airline": "Singapore Airlines"
  },
  {
    "departure": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "arrival": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "departure_time": "2024-09-20T08:45:54",
    "arrival_time": "2024-09-20T11:45:54",
    "price": 1071,
    "airline": "ANA"
  },
  {
    "departure": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "arrival": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "departure_time": "2024-09-26T05:35:26",
    "arrival_time": "2024-09-26T16:35:26",
    "price": 999,
    "airline": "Qantas"
  },
  {
    "departure": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "arrival": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "departure_time": "2024-09-14T09:16:35",
    "arrival_time": "2024-09-14T10:16:35",
    "price": 213,
    "airline": "Qantas"
  },
  {
    "departure": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "arrival": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "departure_time": "2024-09-29T10:05:18",
    "arrival_time": "2024-09-29T17:05:18",
    "price": 539,
    "airline": "American Airlines"
  },
  {
    "departure": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "arrival": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "departure_time": "2024-09-02T06:25:07",
    "arrival_time": "2024-09-02T20:25:07",
    "price": 715,
    "airline": "British Airways"
  },
  {
    "departure": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "arrival": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "departure_time": "2024-09-02T21:40:24",
    "arrival_time": "2024-09-03T09:40:24",
    "price": 1291,
    "airline": "Emirates"
  },
  {
    "departure": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "arrival": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "departure_time": "2024-09-22T00:55:29",
    "arrival_time": "2024-09-22T07:55:29",
    "price": 934,
    "airline": "Emirates"
  },
  {
    "departure": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "arrival": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "departure_time": "2024-09-18T21:49:17",
    "arrival_time": "2024-09-18T22:49:17",
    "price": 108,
    "airline": "United Airlines"
  },
  {
    "departure": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "arrival": {
      "airport": "NRT",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-14T07:27:58",
    "arrival_time": "2024-09-14T10:27:58",
    "price": 644,
    "airline": "Qantas"
  },
  {
    "departure": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "arrival": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "departure_time": "2024-09-28T13:12:09",
    "arrival_time": "2024-09-28T22:12:09",
    "price": 1259,
    "airline": "Lufthansa"
  },
  {
    "departure": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "arrival": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-26T16:18:04",
    "arrival_time": "2024-09-26T18:18:04",
    "price": 959,
    "airline": "Qantas"
  },
  {
    "departure": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "arrival": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "departure_time": "2024-09-05T03:47:25",
    "arrival_time": "2024-09-05T07:47:25",
    "price": 1327,
    "airline": "Delta"
  },
  {
    "departure": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "arrival": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "departure_time": "2024-09-22T13:56:59",
    "arrival_time": "2024-09-23T02:56:59",
    "price": 1374,
    "airline": "Singapore Airlines"
  },
  {
    "departure": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "arrival": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "departure_time": "2024-09-13T15:17:27",
    "arrival_time": "2024-09-13T17:17:27",
    "price": 694,
    "airline": "ANA"
  },
  {
    "departure": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "arrival": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "departure_time": "2024-09-24T23:44:59",
    "arrival_time": "2024-09-25T10:44:59",
    "price": 267,
    "airline": "British Airways"
  },
  {
    "departure": {
      "airport": "NRT",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-22T00:40:21",
    "arrival_time": "2024-09-22T15:40:21",
    "price": 919,
    "airline": "American Airlines"
  },
  {
    "departure": {
      "airport": "NRT",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "departure_time": "2024-09-18T04:04:41",
    "arrival_time": "2024-09-18T18:04:41",
    "price": 678,
    "airline": "Emirates"
  },
  {
    "departure": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "arrival": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-14T20:46:59",
    "arrival_time": "2024-09-15T05:46:59",
    "price": 482,
    "airline": "ANA"
  },
  {
    "departure": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "departure_time": "2024-09-12T00:31:59",
    "arrival_time": "2024-09-12T02:31:59",
    "price": 754,
    "airline": "United Airlines"
  },
  {
    "departure": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "arrival": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "departure_time": "2024-09-14T23:54:12",
    "arrival_time": "2024-09-15T14:54:12",
    "price": 1453,
    "airline": "Delta"
  },
  {
    "departure": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "arrival": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "departure_time": "2024-09-18T00:14:56",
    "arrival_time": "2024-09-18T02:14:56",
    "price": 1269,
    "airline": "Lufthansa"
  },
  {
    "departure": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "arrival": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-03T03:46:05",
    "arrival_time": "2024-09-03T05:46:05",
    "price": 1122,
    "airline": "Lufthansa"
  },
  {
    "departure": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "departure_time": "2024-09-01T11:01:36",
    "arrival_time": "2024-09-01T16:01:36",
    "price": 249,
    "airline": "Delta"
  },
  {
    "departure": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "arrival": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "departure_time": "2024-09-11T07:57:43",
    "arrival_time": "2024-09-11T14:57:43",
    "price": 1499,
    "airline": "Singapore Airlines"
  },
  {
    "departure": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "departure_time": "2024-09-19T11:01:26",
    "arrival_time": "2024-09-19T17:01:26",
    "price": 528,
    "airline": "Qantas"
  },
  {
    "departure": {
      "airport": "NRT",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "departure_time": "2024-09-06T15:41:37",
    "arrival_time": "2024-09-06T20:41:37",
    "price": 1149,
    "airline": "Qantas"
  },
  {
    "departure": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "arrival": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "departure_time": "2024-09-26T22:42:27",
    "arrival_time": "2024-09-26T23:42:27",
    "price": 1406,
    "airline": "Emirates"
  },
  {
    "departure": {
      "airport": "NRT",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "departure_time": "2024-09-25T00:41:26",
    "arrival_time": "2024-09-25T12:41:26",
    "price": 284,
    "airline": "Singapore Airlines"
  },
  {
    "departure": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "arrival": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-14T05:39:54",
    "arrival_time": "2024-09-14T20:39:54",
    "price": 1258,
    "airline": "Delta"
  },
  {
    "departure": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "departure_time": "2024-09-14T03:25:02",
    "arrival_time": "2024-09-14T14:25:02",
    "price": 853,
    "airline": "Delta"
  },
  {
    "departure": {
      "airport": "NRT",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "departure_time": "2024-09-14T16:54:52",
    "arrival_time": "2024-09-15T03:54:52",
    "price": 463,
    "airline": "United Airlines"
  },
  {
    "departure": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "arrival": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-08T23:20:45",
    "arrival_time": "2024-09-09T12:20:45",
    "price": 1032,
    "airline": "Qantas"
  },
  {
    "departure": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "departure_time": "2024-09-16T05:24:09",
    "arrival_time": "2024-09-16T20:24:09",
    "price": 897,
    "airline": "Delta"
  },
  {
    "departure": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "arrival": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "departure_time": "2024-09-02T08:42:16",
    "arrival_time": "2024-09-02T16:42:16",
    "price": 298,
    "airline": "British Airways"
  },
  {
    "departure": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "arrival": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "departure_time": "2024-09-12T01:40:11",
    "arrival_time": "2024-09-12T04:40:11",
    "price": 534,
    "airline": "Air France"
  },
  {
    "departure": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "arrival": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "departure_time": "2024-09-25T12:46:38",
    "arrival_time": "2024-09-25T17:46:38",
    "price": 211,
    "airline": "Qantas"
  },
  {
    "departure": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "arrival": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "departure_time": "2024-09-07T11:28:50",
    "arrival_time": "2024-09-07T14:28:50",
    "price": 181,
    "airline": "Emirates"
  },
  {
    "departure": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "arrival": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "departure_time": "2024-09-08T06:14:56",
    "arrival_time": "2024-09-08T12:14:56",
    "price": 1158,
    "airline": "Delta"
  },
  {
    "departure": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "arrival": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-19T17:16:18",
    "arrival_time": "2024-09-19T22:16:18",
    "price": 125,
    "airline": "Delta"
  },
  {
    "departure": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "arrival": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "departure_time": "2024-09-22T06:43:13",
    "arrival_time": "2024-09-22T16:43:13",
    "price": 100,
    "airline": "British Airways"
  },
  {
    "departure": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "arrival": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "departure_time": "2024-09-23T16:10:18",
    "arrival_time": "2024-09-23T20:10:18",
    "price": 506,
    "airline": "Lufthansa"
  },
  {
    "departure": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "arrival": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "departure_time": "2024-09-24T14:59:08",
    "arrival_time": "2024-09-24T17:59:08",
    "price": 595,
    "airline": "Qantas"
  },
  {
    "departure": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "arrival": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "departure_time": "2024-09-26T06:29:30",
    "arrival_time": "2024-09-26T21:29:30",
    "price": 180,
    "airline": "American Airlines"
  },
  {
    "departure": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "arrival": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-05T18:28:08",
    "arrival_time": "2024-09-06T02:28:08",
    "price": 201,
    "airline": "American Airlines"
  },
  {
    "departure": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "arrival": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "departure_time": "2024-09-03T10:54:09",
    "arrival_time": "2024-09-04T01:54:09",
    "price": 904,
    "airline": "Emirates"
  },
  {
    "departure": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "arrival": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "departure_time": "2024-09-06T15:36:19",
    "arrival_time": "2024-09-07T04:36:19",
    "price": 256,
    "airline": "Delta"
  },
  {
    "departure": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "arrival": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "departure_time": "2024-09-18T06:01:08",
    "arrival_time": "2024-09-18T19:01:08",
    "price": 258,
    "airline": "American Airlines"
  },
  {
    "departure": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "arrival": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "departure_time": "2024-09-13T22:33:05",
    "arrival_time": "2024-09-14T03:33:05",
    "price": 1251,
    "airline": "Delta"
  },
  {
    "departure": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "arrival": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "departure_time": "2024-09-16T13:14:17",
    "arrival_time": "2024-09-16T20:14:17",
    "price": 1017,
    "airline": "British Airways"
  },
  {
    "departure": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "arrival": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-07T21:31:01",
    "arrival_time": "2024-09-08T11:31:01",
    "price": 495,
    "airline": "American Airlines"
  },
  {
    "departure": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "arrival": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "departure_time": "2024-09-28T17:15:06",
    "arrival_time": "2024-09-29T07:15:06",
    "price": 1067,
    "airline": "British Airways"
  },
  {
    "departure": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "arrival": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "departure_time": "2024-09-15T02:04:51",
    "arrival_time": "2024-09-15T13:04:51",
    "price": 1302,
    "airline": "Delta"
  },
  {
    "departure": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "arrival": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-09T20:20:01",
    "arrival_time": "2024-09-10T02:20:01",
    "price": 1472,
    "airline": "United Airlines"
  },
  {
    "departure": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "arrival": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "departure_time": "2024-09-28T18:50:41",
    "arrival_time": "2024-09-28T21:50:41",
    "price": 933,
    "airline": "Air France"
  },
  {
    "departure": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "arrival": {
      "airport": "NRT",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-20T00:11:23",
    "arrival_time": "2024-09-20T14:11:23",
    "price": 465,
    "airline": "Singapore Airlines"
  },
  {
    "departure": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "arrival": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "departure_time": "2024-09-03T23:11:03",
    "arrival_time": "2024-09-04T02:11:03",
    "price": 1482,
    "airline": "Lufthansa"
  },
  {
    "departure": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "arrival": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "departure_time": "2024-09-05T19:57:16",
    "arrival_time": "2024-09-06T10:57:16",
    "price": 739,
    "airline": "Qantas"
  },
  {
    "departure": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "arrival": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "departure_time": "2024-09-02T07:32:04",
    "arrival_time": "2024-09-02T22:32:04",
    "price": 667,
    "airline": "Delta"
  },
  {
    "departure": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "arrival": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "departure_time": "2024-09-24T10:56:38",
    "arrival_time": "2024-09-24T13:56:38",
    "price": 1082,
    "airline": "ANA"
  },
  {
    "departure": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "arrival": {
      "airport": "NRT",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-15T22:56:05",
    "arrival_time": "2024-09-16T11:56:05",
    "price": 584,
    "airline": "American Airlines"
  },
  {
    "departure": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "arrival": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "departure_time": "2024-09-14T11:46:22",
    "arrival_time": "2024-09-14T17:46:22",
    "price": 1483,
    "airline": "Singapore Airlines"
  },
  {
    "departure": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "arrival": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "departure_time": "2024-09-07T15:09:21",
    "arrival_time": "2024-09-07T16:09:21",
    "price": 1276,
    "airline": "United Airlines"
  },
  {
    "departure": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "arrival": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "departure_time": "2024-09-29T07:47:53",
    "arrival_time": "2024-09-29T11:47:53",
    "price": 572,
    "airline": "Emirates"
  },
  {
    "departure": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "departure_time": "2024-09-08T07:09:15",
    "arrival_time": "2024-09-08T21:09:15",
    "price": 1240,
    "airline": "Lufthansa"
  },
  {
    "departure": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "arrival": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "departure_time": "2024-09-20T10:26:34",
    "arrival_time": "2024-09-20T19:26:34",
    "price": 527,
    "airline": "ANA"
  },
  {
    "departure": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "arrival": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "departure_time": "2024-09-17T22:14:56",
    "arrival_time": "2024-09-18T00:14:56",
    "price": 277,
    "airline": "American Airlines"
  },
  {
    "departure": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "arrival": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "departure_time": "2024-09-26T11:31:55",
    "arrival_time": "2024-09-26T16:31:55",
    "price": 575,
    "airline": "ANA"
  },
  {
    "departure": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "arrival": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "departure_time": "2024-09-11T04:12:45",
    "arrival_time": "2024-09-11T12:12:45",
    "price": 1237,
    "airline": "Delta"
  },
  {
    "departure": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "arrival": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "departure_time": "2024-09-17T03:39:50",
    "arrival_time": "2024-09-17T04:39:50",
    "price": 331,
    "airline": "American Airlines"
  },
  {
    "departure": {
      "airport": "NRT",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "departure_time": "2024-09-17T11:23:00",
    "arrival_time": "2024-09-18T02:23:00",
    "price": 604,
    "airline": "American Airlines"
  },
  {
    "departure": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "NRT",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-01T15:12:50",
    "arrival_time": "2024-09-01T19:12:50",
    "price": 311,
    "airline": "American Airlines"
  },
  {
    "departure": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "arrival": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "departure_time": "2024-09-10T23:46:42",
    "arrival_time": "2024-09-11T02:46:42",
    "price": 928,
    "airline": "United Airlines"
  },
  {
    "departure": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "arrival": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "departure_time": "2024-09-28T14:03:16",
    "arrival_time": "2024-09-28T23:03:16",
    "price": 888,
    "airline": "Emirates"
  },
  {
    "departure": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "arrival": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "departure_time": "2024-09-14T10:36:41",
    "arrival_time": "2024-09-14T15:36:41",
    "price": 146,
    "airline": "American Airlines"
  },
  {
    "departure": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "arrival": {
      "airport": "NRT",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-17T08:01:38",
    "arrival_time": "2024-09-17T20:01:38",
    "price": 744,
    "airline": "British Airways"
  },
  {
    "departure": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "arrival": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "departure_time": "2024-09-20T21:17:52",
    "arrival_time": "2024-09-21T09:17:52",
    "price": 975,
    "airline": "Air France"
  },
  {
    "departure": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "arrival": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "departure_time": "2024-09-28T07:18:24",
    "arrival_time": "2024-09-28T09:18:24",
    "price": 1043,
    "airline": "Air France"
  },
  {
    "departure": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "arrival": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "departure_time": "2024-09-22T21:37:55",
    "arrival_time": "2024-09-23T01:37:55",
    "price": 576,
    "airline": "Delta"
  },
  {
    "departure": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "arrival": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "departure_time": "2024-09-04T06:09:12",
    "arrival_time": "2024-09-04T11:09:12",
    "price": 975,
    "airline": "ANA"
  },
  {
    "departure": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "arrival": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "departure_time": "2024-09-29T15:20:27",
    "arrival_time": "2024-09-30T00:20:27",
    "price": 1004,
    "airline": "American Airlines"
  },
  {
    "departure": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "departure_time": "2024-09-02T06:07:11",
    "arrival_time": "2024-09-02T07:07:11",
    "price": 183,
    "airline": "American Airlines"
  },
  {
    "departure": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "arrival": {
      "airport": "NRT",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-27T01:02:05",
    "arrival_time": "2024-09-27T08:02:05",
    "price": 1219,
    "airline": "American Airlines"
  },
  {
    "departure": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "arrival": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "departure_time": "2024-09-25T06:07:14",
    "arrival_time": "2024-09-25T12:07:14",
    "price": 229,
    "airline": "Delta"
  },
  {
    "departure": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "arrival": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "departure_time": "2024-09-03T04:38:52",
    "arrival_time": "2024-09-03T08:38:52",
    "price": 1204,
    "airline": "Emirates"
  },
  {
    "departure": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "arrival": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "departure_time": "2024-09-18T09:51:55",
    "arrival_time": "2024-09-18T23:51:55",
    "price": 998,
    "airline": "ANA"
  },
  {
    "departure": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "arrival": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "departure_time": "2024-09-20T13:43:23",
    "arrival_time": "2024-09-20T22:43:23",
    "price": 1493,
    "airline": "American Airlines"
  },
  {
    "departure": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "arrival": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "departure_time": "2024-09-29T07:50:25",
    "arrival_time": "2024-09-29T13:50:25",
    "price": 1430,
    "airline": "ANA"
  },
  {
    "departure": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "arrival": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "departure_time": "2024-09-28T21:59:17",
    "arrival_time": "2024-09-29T10:59:17",
    "price": 1111,
    "airline": "Qantas"
  },
  {
    "departure": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "arrival": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "departure_time": "2024-09-08T07:16:04",
    "arrival_time": "2024-09-08T12:16:04",
    "price": 740,
    "airline": "British Airways"
  },
  {
    "departure": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "departure_time": "2024-09-12T20:43:24",
    "arrival_time": "2024-09-12T23:43:24",
    "price": 197,
    "airline": "Air France"
  },
  {
    "departure": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "arrival": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-14T02:15:31",
    "arrival_time": "2024-09-14T12:15:31",
    "price": 576,
    "airline": "American Airlines"
  },
  {
    "departure": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "arrival": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "departure_time": "2024-09-24T02:41:22",
    "arrival_time": "2024-09-24T17:41:22",
    "price": 1169,
    "airline": "ANA"
  },
  {
    "departure": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "arrival": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "departure_time": "2024-09-17T08:27:26",
    "arrival_time": "2024-09-17T09:27:26",
    "price": 261,
    "airline": "Air France"
  },
  {
    "departure": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "arrival": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "departure_time": "2024-09-27T10:58:40",
    "arrival_time": "2024-09-27T12:58:40",
    "price": 1131,
    "airline": "United Airlines"
  },
  {
    "departure": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "arrival": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "departure_time": "2024-09-17T15:48:36",
    "arrival_time": "2024-09-18T06:48:36",
    "price": 283,
    "airline": "British Airways"
  },
  {
    "departure": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "arrival": {
      "airport": "NRT",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-09T08:22:50",
    "arrival_time": "2024-09-09T23:22:50",
    "price": 1197,
    "airline": "Qantas"
  },
  {
    "departure": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "arrival": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "departure_time": "2024-09-21T12:00:33",
    "arrival_time": "2024-09-21T16:00:33",
    "price": 706,
    "airline": "Singapore Airlines"
  },
  {
    "departure": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "arrival": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "departure_time": "2024-09-05T06:35:52",
    "arrival_time": "2024-09-05T18:35:52",
    "price": 608,
    "airline": "Singapore Airlines"
  },
  {
    "departure": {
      "airport": "NRT",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-07T23:52:36",
    "arrival_time": "2024-09-08T02:52:36",
    "price": 1304,
    "airline": "Delta"
  },
  {
    "departure": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "arrival": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "departure_time": "2024-09-21T09:32:50",
    "arrival_time": "2024-09-21T17:32:50",
    "price": 1078,
    "airline": "Emirates"
  },
  {
    "departure": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "arrival": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "departure_time": "2024-09-22T15:35:32",
    "arrival_time": "2024-09-22T16:35:32",
    "price": 1473,
    "airline": "Singapore Airlines"
  },
  {
    "departure": {
      "airport": "NRT",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "departure_time": "2024-09-04T23:06:08",
    "arrival_time": "2024-09-05T05:06:08",
    "price": 223,
    "airline": "ANA"
  },
  {
    "departure": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "arrival": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "departure_time": "2024-09-13T02:51:34",
    "arrival_time": "2024-09-13T15:51:34",
    "price": 455,
    "airline": "Qantas"
  },
  {
    "departure": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "departure_time": "2024-09-14T06:04:10",
    "arrival_time": "2024-09-14T20:04:10",
    "price": 1224,
    "airline": "American Airlines"
  },
  {
    "departure": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "arrival": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "departure_time": "2024-09-16T22:11:56",
    "arrival_time": "2024-09-17T00:11:56",
    "price": 1417,
    "airline": "Air France"
  },
  {
    "departure": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "arrival": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-27T02:53:31",
    "arrival_time": "2024-09-27T12:53:31",
    "price": 289,
    "airline": "United Airlines"
  },
  {
    "departure": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "departure_time": "2024-09-09T16:46:56",
    "arrival_time": "2024-09-09T18:46:56",
    "price": 1377,
    "airline": "Qantas"
  },
  {
    "departure": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "arrival": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "departure_time": "2024-09-17T12:08:40",
    "arrival_time": "2024-09-17T15:08:40",
    "price": 758,
    "airline": "Delta"
  },
  {
    "departure": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "arrival": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "departure_time": "2024-09-09T17:26:01",
    "arrival_time": "2024-09-10T06:26:01",
    "price": 412,
    "airline": "Delta"
  },
  {
    "departure": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "arrival": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "departure_time": "2024-09-09T15:01:15",
    "arrival_time": "2024-09-09T18:01:15",
    "price": 406,
    "airline": "Singapore Airlines"
  },
  {
    "departure": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "arrival": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "departure_time": "2024-09-23T03:22:07",
    "arrival_time": "2024-09-23T06:22:07",
    "price": 362,
    "airline": "Air France"
  },
  {
    "departure": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "arrival": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "departure_time": "2024-09-17T16:21:12",
    "arrival_time": "2024-09-17T19:21:12",
    "price": 366,
    "airline": "Air France"
  },
  {
    "departure": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "arrival": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "departure_time": "2024-09-22T06:47:14",
    "arrival_time": "2024-09-22T17:47:14",
    "price": 150,
    "airline": "Qantas"
  },
  {
    "departure": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "arrival": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "departure_time": "2024-09-28T13:26:58",
    "arrival_time": "2024-09-28T20:26:58",
    "price": 791,
    "airline": "Air France"
  },
  {
    "departure": {
      "airport": "NRT",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "departure_time": "2024-09-20T15:00:29",
    "arrival_time": "2024-09-21T00:00:29",
    "price": 513,
    "airline": "Air France"
  },
  {
    "departure": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "arrival": {
      "airport": "NRT",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-28T21:37:02",
    "arrival_time": "2024-09-29T03:37:02",
    "price": 495,
    "airline": "American Airlines"
  },
  {
    "departure": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "departure_time": "2024-09-04T10:54:48",
    "arrival_time": "2024-09-04T19:54:48",
    "price": 890,
    "airline": "Emirates"
  },
  {
    "departure": {
      "airport": "NRT",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-04T16:42:24",
    "arrival_time": "2024-09-05T06:42:24",
    "price": 1455,
    "airline": "American Airlines"
  },
  {
    "departure": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "arrival": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "departure_time": "2024-09-14T11:53:11",
    "arrival_time": "2024-09-14T23:53:11",
    "price": 364,
    "airline": "Emirates"
  },
  {
    "departure": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "arrival": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "departure_time": "2024-09-24T11:55:35",
    "arrival_time": "2024-09-24T20:55:35",
    "price": 1260,
    "airline": "Emirates"
  },
  {
    "departure": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "arrival": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "departure_time": "2024-09-29T02:11:31",
    "arrival_time": "2024-09-29T12:11:31",
    "price": 549,
    "airline": "Delta"
  },
  {
    "departure": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "arrival": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "departure_time": "2024-09-14T20:12:40",
    "arrival_time": "2024-09-15T05:12:40",
    "price": 1010,
    "airline": "United Airlines"
  },
  {
    "departure": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "arrival": {
      "airport": "NRT",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-23T21:34:12",
    "arrival_time": "2024-09-24T03:34:12",
    "price": 1175,
    "airline": "Emirates"
  },
  {
    "departure": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "departure_time": "2024-09-29T16:19:25",
    "arrival_time": "2024-09-30T02:19:25",
    "price": 753,
    "airline": "Air France"
  },
  {
    "departure": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "arrival": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "departure_time": "2024-09-09T04:15:16",
    "arrival_time": "2024-09-09T08:15:16",
    "price": 258,
    "airline": "British Airways"
  },
  {
    "departure": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "arrival": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "departure_time": "2024-09-18T23:45:34",
    "arrival_time": "2024-09-19T09:45:34",
    "price": 1256,
    "airline": "ANA"
  },
  {
    "departure": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "arrival": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "departure_time": "2024-09-14T21:13:07",
    "arrival_time": "2024-09-15T02:13:07",
    "price": 1175,
    "airline": "ANA"
  },
  {
    "departure": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "arrival": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "departure_time": "2024-09-09T05:54:40",
    "arrival_time": "2024-09-09T20:54:40",
    "price": 596,
    "airline": "Air France"
  },
  {
    "departure": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "arrival": {
      "airport": "NRT",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-11T18:49:20",
    "arrival_time": "2024-09-11T23:49:20",
    "price": 1480,
    "airline": "American Airlines"
  },
  {
    "departure": {
      "airport": "NRT",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "departure_time": "2024-09-27T19:46:36",
    "arrival_time": "2024-09-28T02:46:36",
    "price": 501,
    "airline": "Lufthansa"
  },
  {
    "departure": {
      "airport": "NRT",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "departure_time": "2024-09-26T20:44:47",
    "arrival_time": "2024-09-26T22:44:47",
    "price": 651,
    "airline": "United Airlines"
  },
  {
    "departure": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "arrival": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "departure_time": "2024-09-05T10:16:24",
    "arrival_time": "2024-09-06T01:16:24",
    "price": 450,
    "airline": "Qantas"
  },
  {
    "departure": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "arrival": {
      "airport": "NRT",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-25T04:59:50",
    "arrival_time": "2024-09-25T07:59:50",
    "price": 976,
    "airline": "Lufthansa"
  },
  {
    "departure": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "arrival": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "departure_time": "2024-09-17T03:53:36",
    "arrival_time": "2024-09-17T14:53:36",
    "price": 830,
    "airline": "United Airlines"
  },
  {
    "departure": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "arrival": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "departure_time": "2024-09-09T05:32:54",
    "arrival_time": "2024-09-09T17:32:54",
    "price": 224,
    "airline": "Emirates"
  },
  {
    "departure": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "arrival": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "departure_time": "2024-09-14T21:08:01",
    "arrival_time": "2024-09-15T01:08:01",
    "price": 818,
    "airline": "Air France"
  },
  {
    "departure": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "arrival": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "departure_time": "2024-09-14T15:32:04",
    "arrival_time": "2024-09-15T01:32:04",
    "price": 137,
    "airline": "Qantas"
  },
  {
    "departure": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "arrival": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "departure_time": "2024-09-16T07:42:56",
    "arrival_time": "2024-09-16T16:42:56",
    "price": 396,
    "airline": "United Airlines"
  },
  {
    "departure": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "arrival": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "departure_time": "2024-09-15T01:08:07",
    "arrival_time": "2024-09-15T08:08:07",
    "price": 1212,
    "airline": "Air France"
  },
  {
    "departure": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "arrival": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "departure_time": "2024-09-17T03:24:12",
    "arrival_time": "2024-09-17T17:24:12",
    "price": 565,
    "airline": "Singapore Airlines"
  },
  {
    "departure": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "arrival": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "departure_time": "2024-09-15T02:09:56",
    "arrival_time": "2024-09-15T10:09:56",
    "price": 264,
    "airline": "Emirates"
  },
  {
    "departure": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "departure_time": "2024-09-27T21:52:06",
    "arrival_time": "2024-09-28T00:52:06",
    "price": 335,
    "airline": "American Airlines"
  },
  {
    "departure": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "arrival": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "departure_time": "2024-09-02T13:55:38",
    "arrival_time": "2024-09-02T23:55:38",
    "price": 1411,
    "airline": "British Airways"
  },
  {
    "departure": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "arrival": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "departure_time": "2024-09-03T23:01:26",
    "arrival_time": "2024-09-04T02:01:26",
    "price": 306,
    "airline": "Singapore Airlines"
  },
  {
    "departure": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "arrival": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-21T19:58:07",
    "arrival_time": "2024-09-22T07:58:07",
    "price": 1007,
    "airline": "Singapore Airlines"
  },
  {
    "departure": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "arrival": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "departure_time": "2024-09-23T06:37:09",
    "arrival_time": "2024-09-23T08:37:09",
    "price": 1076,
    "airline": "Qantas"
  },
  {
    "departure": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "arrival": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "departure_time": "2024-09-29T22:16:12",
    "arrival_time": "2024-09-30T06:16:12",
    "price": 1018,
    "airline": "United Airlines"
  },
  {
    "departure": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "arrival": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "departure_time": "2024-09-26T02:10:11",
    "arrival_time": "2024-09-26T16:10:11",
    "price": 627,
    "airline": "Qantas"
  },
  {
    "departure": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "arrival": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "departure_time": "2024-09-07T05:21:54",
    "arrival_time": "2024-09-07T07:21:54",
    "price": 1296,
    "airline": "ANA"
  },
  {
    "departure": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "NRT",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-27T10:55:18",
    "arrival_time": "2024-09-27T11:55:18",
    "price": 993,
    "airline": "ANA"
  },
  {
    "departure": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "arrival": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "departure_time": "2024-09-04T15:17:48",
    "arrival_time": "2024-09-04T17:17:48",
    "price": 445,
    "airline": "Singapore Airlines"
  },
  {
    "departure": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "arrival": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "departure_time": "2024-09-20T20:25:36",
    "arrival_time": "2024-09-21T01:25:36",
    "price": 118,
    "airline": "Lufthansa"
  },
  {
    "departure": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "arrival": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "departure_time": "2024-09-16T22:57:04",
    "arrival_time": "2024-09-17T11:57:04",
    "price": 1432,
    "airline": "ANA"
  },
  {
    "departure": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "arrival": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-13T03:12:30",
    "arrival_time": "2024-09-13T13:12:30",
    "price": 905,
    "airline": "Singapore Airlines"
  },
  {
    "departure": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "arrival": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "departure_time": "2024-09-20T04:23:08",
    "arrival_time": "2024-09-20T08:23:08",
    "price": 435,
    "airline": "Singapore Airlines"
  },
  {
    "departure": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "arrival": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-01T00:07:58",
    "arrival_time": "2024-09-01T10:07:58",
    "price": 1229,
    "airline": "United Airlines"
  },
  {
    "departure": {
      "airport": "NRT",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "FRA",
      "country": "Germany",
      "city": "Frankfurt"
    },
    "departure_time": "2024-09-16T21:32:57",
    "arrival_time": "2024-09-17T01:32:57",
    "price": 421,
    "airline": "American Airlines"
  },
  {
    "departure": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "arrival": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "departure_time": "2024-09-20T15:02:24",
    "arrival_time": "2024-09-20T23:02:24",
    "price": 964,
    "airline": "British Airways"
  },
  {
    "departure": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "arrival": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "departure_time": "2024-09-17T04:13:26",
    "arrival_time": "2024-09-17T15:13:26",
    "price": 836,
    "airline": "Lufthansa"
  },
  {
    "departure": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "arrival": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "departure_time": "2024-09-09T21:47:41",
    "arrival_time": "2024-09-10T07:47:41",
    "price": 899,
    "airline": "Singapore Airlines"
  },
  {
    "departure": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "arrival": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-10T17:02:58",
    "arrival_time": "2024-09-10T18:02:58",
    "price": 1117,
    "airline": "American Airlines"
  },
  {
    "departure": {
      "airport": "NRT",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "departure_time": "2024-09-14T14:17:15",
    "arrival_time": "2024-09-15T03:17:15",
    "price": 834,
    "airline": "American Airlines"
  },
  {
    "departure": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "arrival": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "departure_time": "2024-09-17T23:14:14",
    "arrival_time": "2024-09-18T03:14:14",
    "price": 1181,
    "airline": "Air France"
  },
  {
    "departure": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "departure_time": "2024-09-06T18:18:38",
    "arrival_time": "2024-09-07T09:18:38",
    "price": 1180,
    "airline": "Air France"
  },
  {
    "departure": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "departure_time": "2024-09-02T14:55:01",
    "arrival_time": "2024-09-02T21:55:01",
    "price": 670,
    "airline": "Emirates"
  },
  {
    "departure": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "arrival": {
      "airport": "NRT",
      "country": "Japan",
      "city": "Tokyo"
    },
    "departure_time": "2024-09-09T18:58:16",
    "arrival_time": "2024-09-10T04:58:16",
    "price": 838,
    "airline": "Delta"
  },
  {
    "departure": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "arrival": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "departure_time": "2024-09-09T17:26:32",
    "arrival_time": "2024-09-09T21:26:32",
    "price": 1460,
    "airline": "Qantas"
  },
  {
    "departure": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "arrival": {
      "airport": "ORD",
      "country": "USA",
      "city": "Chicago"
    },
    "departure_time": "2024-09-19T16:23:22",
    "arrival_time": "2024-09-20T07:23:22",
    "price": 170,
    "airline": "British Airways"
  },
  {
    "departure": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "arrival": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "departure_time": "2024-09-26T02:39:04",
    "arrival_time": "2024-09-26T08:39:04",
    "price": 294,
    "airline": "United Airlines"
  },
  {
    "departure": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "SYD",
      "country": "Australia",
      "city": "Sydney"
    },
    "departure_time": "2024-09-05T12:16:47",
    "arrival_time": "2024-09-05T23:16:47",
    "price": 1211,
    "airline": "Delta"
  },
  {
    "departure": {
      "airport": "HND",
      "country": "Japan",
      "city": "Tokyo"
    },
    "arrival": {
      "airport": "LAX",
      "country": "USA",
      "city": "Los Angeles"
    },
    "departure_time": "2024-09-24T04:08:29",
    "arrival_time": "2024-09-24T13:08:29",
    "price": 1001,
    "airline": "British Airways"
  },
  {
    "departure": {
      "airport": "CDG",
      "country": "France",
      "city": "Paris"
    },
    "arrival": {
      "airport": "LHR",
      "country": "UK",
      "city": "London"
    },
    "departure_time": "2024-09-03T13:54:23",
    "arrival_time": "2024-09-04T04:54:23",
    "price": 939,
    "airline": "American Airlines"
  },
  {
    "departure": {
      "airport": "DXB",
      "country": "UAE",
      "city": "Dubai"
    },
    "arrival": {
      "airport": "JFK",
      "country": "USA",
      "city": "New York"
    },
    "departure_time": "2024-09-16T12:55:22",
    "arrival_time": "2024-09-16T15:55:22",
    "price": 524,
    "airline": "Qantas"
  }
]

export default flightsData;