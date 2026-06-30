window.DEMO_DATA = {
  "project": "MovieLens 100K Recommender Demo",
  "course": "INFO 442",
  "models": [
    {
      "key": "baseline",
      "label": "Bias Baseline"
    },
    {
      "key": "item_cf",
      "label": "Item-Based CF"
    },
    {
      "key": "mf",
      "label": "Matrix Factorization"
    }
  ],
  "metrics": {
    "baseline": {
      "rmse": 0.977,
      "mae": 0.766,
      "p10": 0.009
    },
    "item_cf": {
      "rmse": 0.962,
      "mae": 0.751,
      "p10": 0.062
    },
    "mf": {
      "rmse": 0.959,
      "mae": 0.75,
      "p10": 0.025
    }
  },
  "users": [
    {
      "user_id": 196,
      "age": 49,
      "gender": "M",
      "occupation": "writer",
      "history": [
        {
          "title": "Fish Called Wanda, A (1988)",
          "rating": 5
        },
        {
          "title": "Secrets & Lies (1996)",
          "rating": 5
        },
        {
          "title": "Fast, Cheap & Out of Control (1997)",
          "rating": 4
        },
        {
          "title": "Kids in the Hall: Brain Candy (1996)",
          "rating": 4
        },
        {
          "title": "Waiting for Guffman (1996)",
          "rating": 4
        },
        {
          "title": "That Thing You Do! (1996)",
          "rating": 4
        },
        {
          "title": "Nutty Professor, The (1996)",
          "rating": 4
        },
        {
          "title": "Adventures of Priscilla, Queen of the Desert, The (1994)",
          "rating": 4
        }
      ],
      "recommendations": {
        "baseline": [
          {
            "item_id": 1122,
            "title": "They Made Me a Criminal (1939)",
            "year": "1939",
            "predicted": 4.71
          },
          {
            "item_id": 1599,
            "title": "Someone Else's America (1995)",
            "year": "1996",
            "predicted": 4.71
          },
          {
            "item_id": 1500,
            "title": "Santa with Muscles (1996)",
            "year": "1996",
            "predicted": 4.71
          },
          {
            "item_id": 1293,
            "title": "Star Kid (1997)",
            "year": "1998",
            "predicted": 4.71
          },
          {
            "item_id": 1653,
            "title": "Entertaining Angels: The Dorothy Day Story (1996)",
            "year": "1996",
            "predicted": 4.71
          },
          {
            "item_id": 1467,
            "title": "Saint of Fort Washington, The (1993)",
            "year": "1993",
            "predicted": 4.71
          },
          {
            "item_id": 1201,
            "title": "Marlene Dietrich: Shadow and Light (1996) ",
            "year": "1996",
            "predicted": 4.71
          },
          {
            "item_id": 1189,
            "title": "Prefontaine (1997)",
            "year": "1997",
            "predicted": 4.71
          },
          {
            "item_id": 1449,
            "title": "Pather Panchali (1955)",
            "year": "1996",
            "predicted": 4.42
          },
          {
            "item_id": 1367,
            "title": "Faust (1994)",
            "year": "1994",
            "predicted": 4.38
          }
        ],
        "item_cf": [
          {
            "item_id": 1500,
            "title": "Santa with Muscles (1996)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1342,
            "title": "Convent, The (Convento, O) (1995)",
            "year": "1996",
            "predicted": 4.7
          },
          {
            "item_id": 1515,
            "title": "Wings of Courage (1995)",
            "year": "1995",
            "predicted": 4.52
          },
          {
            "item_id": 1614,
            "title": "Reluctant Debutante, The (1958)",
            "year": "1958",
            "predicted": 4.48
          },
          {
            "item_id": 1541,
            "title": "Beans of Egypt, Maine, The (1994)",
            "year": "1994",
            "predicted": 4.31
          },
          {
            "item_id": 1507,
            "title": "Three Lives and Only One Death (1996)",
            "year": "1996",
            "predicted": 4.27
          },
          {
            "item_id": 1593,
            "title": "Death in Brunswick (1991)",
            "year": "1996",
            "predicted": 4.22
          },
          {
            "item_id": 1169,
            "title": "Fresh (1994)",
            "year": "1994",
            "predicted": 4.14
          },
          {
            "item_id": 1455,
            "title": "Outlaw, The (1943)",
            "year": "1943",
            "predicted": 4.03
          },
          {
            "item_id": 1442,
            "title": "Scarlet Letter, The (1995)",
            "year": "1995",
            "predicted": 4.03
          }
        ],
        "mf": [
          {
            "item_id": 1201,
            "title": "Marlene Dietrich: Shadow and Light (1996) ",
            "year": "1996",
            "predicted": 4.71
          },
          {
            "item_id": 1189,
            "title": "Prefontaine (1997)",
            "year": "1997",
            "predicted": 4.71
          },
          {
            "item_id": 1500,
            "title": "Santa with Muscles (1996)",
            "year": "1996",
            "predicted": 4.71
          },
          {
            "item_id": 1599,
            "title": "Someone Else's America (1995)",
            "year": "1996",
            "predicted": 4.71
          },
          {
            "item_id": 1653,
            "title": "Entertaining Angels: The Dorothy Day Story (1996)",
            "year": "1996",
            "predicted": 4.71
          },
          {
            "item_id": 1122,
            "title": "They Made Me a Criminal (1939)",
            "year": "1939",
            "predicted": 4.71
          },
          {
            "item_id": 1467,
            "title": "Saint of Fort Washington, The (1993)",
            "year": "1993",
            "predicted": 4.71
          },
          {
            "item_id": 1293,
            "title": "Star Kid (1997)",
            "year": "1998",
            "predicted": 4.71
          },
          {
            "item_id": 1449,
            "title": "Pather Panchali (1955)",
            "year": "1996",
            "predicted": 4.42
          },
          {
            "item_id": 1367,
            "title": "Faust (1994)",
            "year": "1994",
            "predicted": 4.38
          }
        ]
      }
    },
    {
      "user_id": 253,
      "age": 26,
      "gender": "F",
      "occupation": "librarian",
      "history": [
        {
          "title": "Toy Story (1995)",
          "rating": 5
        },
        {
          "title": "Arsenic and Old Lace (1944)",
          "rating": 5
        },
        {
          "title": "To Kill a Mockingbird (1962)",
          "rating": 5
        },
        {
          "title": "Some Like It Hot (1959)",
          "rating": 5
        },
        {
          "title": "My Fair Lady (1964)",
          "rating": 5
        },
        {
          "title": "Groundhog Day (1993)",
          "rating": 5
        },
        {
          "title": "To Catch a Thief (1955)",
          "rating": 5
        },
        {
          "title": "His Girl Friday (1940)",
          "rating": 5
        }
      ],
      "recommendations": {
        "baseline": [
          {
            "item_id": 1599,
            "title": "Someone Else's America (1995)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1449,
            "title": "Pather Panchali (1955)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1122,
            "title": "They Made Me a Criminal (1939)",
            "year": "1939",
            "predicted": 5.0
          },
          {
            "item_id": 1467,
            "title": "Saint of Fort Washington, The (1993)",
            "year": "1993",
            "predicted": 5.0
          },
          {
            "item_id": 1653,
            "title": "Entertaining Angels: The Dorothy Day Story (1996)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1201,
            "title": "Marlene Dietrich: Shadow and Light (1996) ",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1189,
            "title": "Prefontaine (1997)",
            "year": "1997",
            "predicted": 5.0
          },
          {
            "item_id": 1500,
            "title": "Santa with Muscles (1996)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1367,
            "title": "Faust (1994)",
            "year": "1994",
            "predicted": 5.0
          },
          {
            "item_id": 1293,
            "title": "Star Kid (1997)",
            "year": "1998",
            "predicted": 5.0
          }
        ],
        "item_cf": [
          {
            "item_id": 1653,
            "title": "Entertaining Angels: The Dorothy Day Story (1996)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1155,
            "title": "Rendezvous in Paris (Rendez-vous de Paris, Les) (1995)",
            "year": "1996",
            "predicted": 4.81
          },
          {
            "item_id": 1318,
            "title": "Catwalk (1995)",
            "year": "1996",
            "predicted": 4.75
          },
          {
            "item_id": 1354,
            "title": "Venice/Venice (1992)",
            "year": "1992",
            "predicted": 4.73
          },
          {
            "item_id": 1606,
            "title": "Deceiver (1997)",
            "year": "1997",
            "predicted": 4.71
          },
          {
            "item_id": 496,
            "title": "It's a Wonderful Life (1946)",
            "year": "1946",
            "predicted": 4.61
          },
          {
            "item_id": 633,
            "title": "Christmas Carol, A (1938)",
            "year": "1938",
            "predicted": 4.6
          },
          {
            "item_id": 498,
            "title": "African Queen, The (1951)",
            "year": "1951",
            "predicted": 4.57
          },
          {
            "item_id": 423,
            "title": "E.T. the Extra-Terrestrial (1982)",
            "year": "1982",
            "predicted": 4.57
          },
          {
            "item_id": 1332,
            "title": "My Life and Times With Antonin Artaud (En compagnie d'Antonin Artaud) (1993)",
            "year": "1993",
            "predicted": 4.56
          }
        ],
        "mf": [
          {
            "item_id": 1449,
            "title": "Pather Panchali (1955)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1500,
            "title": "Santa with Muscles (1996)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1201,
            "title": "Marlene Dietrich: Shadow and Light (1996) ",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1599,
            "title": "Someone Else's America (1995)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1122,
            "title": "They Made Me a Criminal (1939)",
            "year": "1939",
            "predicted": 5.0
          },
          {
            "item_id": 1467,
            "title": "Saint of Fort Washington, The (1993)",
            "year": "1993",
            "predicted": 5.0
          },
          {
            "item_id": 1189,
            "title": "Prefontaine (1997)",
            "year": "1997",
            "predicted": 5.0
          },
          {
            "item_id": 1653,
            "title": "Entertaining Angels: The Dorothy Day Story (1996)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1367,
            "title": "Faust (1994)",
            "year": "1994",
            "predicted": 5.0
          },
          {
            "item_id": 1293,
            "title": "Star Kid (1997)",
            "year": "1998",
            "predicted": 5.0
          }
        ]
      }
    },
    {
      "user_id": 308,
      "age": 60,
      "gender": "M",
      "occupation": "retired",
      "history": [
        {
          "title": "Being There (1979)",
          "rating": 5
        },
        {
          "title": "Sleeper (1973)",
          "rating": 5
        },
        {
          "title": "Some Like It Hot (1959)",
          "rating": 5
        },
        {
          "title": "His Girl Friday (1940)",
          "rating": 5
        },
        {
          "title": "Cape Fear (1991)",
          "rating": 5
        },
        {
          "title": "Chinatown (1974)",
          "rating": 5
        },
        {
          "title": "Touch of Evil (1958)",
          "rating": 5
        },
        {
          "title": "Once Upon a Time in the West (1969)",
          "rating": 5
        }
      ],
      "recommendations": {
        "baseline": [
          {
            "item_id": 1293,
            "title": "Star Kid (1997)",
            "year": "1998",
            "predicted": 5.0
          },
          {
            "item_id": 1467,
            "title": "Saint of Fort Washington, The (1993)",
            "year": "1993",
            "predicted": 5.0
          },
          {
            "item_id": 1449,
            "title": "Pather Panchali (1955)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1122,
            "title": "They Made Me a Criminal (1939)",
            "year": "1939",
            "predicted": 5.0
          },
          {
            "item_id": 1599,
            "title": "Someone Else's America (1995)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1653,
            "title": "Entertaining Angels: The Dorothy Day Story (1996)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1201,
            "title": "Marlene Dietrich: Shadow and Light (1996) ",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1189,
            "title": "Prefontaine (1997)",
            "year": "1997",
            "predicted": 5.0
          },
          {
            "item_id": 1500,
            "title": "Santa with Muscles (1996)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1367,
            "title": "Faust (1994)",
            "year": "1994",
            "predicted": 4.97
          }
        ],
        "item_cf": [
          {
            "item_id": 1293,
            "title": "Star Kid (1997)",
            "year": "1998",
            "predicted": 4.6
          },
          {
            "item_id": 302,
            "title": "L.A. Confidential (1997)",
            "year": "1997",
            "predicted": 4.51
          },
          {
            "item_id": 1613,
            "title": "Tokyo Fist (1995)",
            "year": "1998",
            "predicted": 4.51
          },
          {
            "item_id": 12,
            "title": "Usual Suspects, The (1995)",
            "year": "1995",
            "predicted": 4.5
          },
          {
            "item_id": 1143,
            "title": "Hard Eight (1996)",
            "year": "1997",
            "predicted": 4.49
          },
          {
            "item_id": 127,
            "title": "Godfather, The (1972)",
            "year": "1972",
            "predicted": 4.49
          },
          {
            "item_id": 346,
            "title": "Jackie Brown (1997)",
            "year": "1997",
            "predicted": 4.48
          },
          {
            "item_id": 100,
            "title": "Fargo (1996)",
            "year": "1997",
            "predicted": 4.47
          },
          {
            "item_id": 1388,
            "title": "Gabbeh (1996)",
            "year": "1997",
            "predicted": 4.45
          },
          {
            "item_id": 192,
            "title": "Raging Bull (1980)",
            "year": "1980",
            "predicted": 4.44
          }
        ],
        "mf": [
          {
            "item_id": 1467,
            "title": "Saint of Fort Washington, The (1993)",
            "year": "1993",
            "predicted": 5.0
          },
          {
            "item_id": 1653,
            "title": "Entertaining Angels: The Dorothy Day Story (1996)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 89,
            "title": "Blade Runner (1982)",
            "year": "1982",
            "predicted": 5.0
          },
          {
            "item_id": 127,
            "title": "Godfather, The (1972)",
            "year": "1972",
            "predicted": 5.0
          },
          {
            "item_id": 1449,
            "title": "Pather Panchali (1955)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1500,
            "title": "Santa with Muscles (1996)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1122,
            "title": "They Made Me a Criminal (1939)",
            "year": "1939",
            "predicted": 5.0
          },
          {
            "item_id": 1293,
            "title": "Star Kid (1997)",
            "year": "1998",
            "predicted": 5.0
          },
          {
            "item_id": 1189,
            "title": "Prefontaine (1997)",
            "year": "1997",
            "predicted": 5.0
          },
          {
            "item_id": 1599,
            "title": "Someone Else's America (1995)",
            "year": "1996",
            "predicted": 5.0
          }
        ]
      }
    },
    {
      "user_id": 122,
      "age": 32,
      "gender": "F",
      "occupation": "writer",
      "history": [
        {
          "title": "Short Cuts (1993)",
          "rating": 5
        },
        {
          "title": "Apocalypse Now (1979)",
          "rating": 5
        },
        {
          "title": "Little Women (1994)",
          "rating": 5
        },
        {
          "title": "Full Monty, The (1997)",
          "rating": 5
        },
        {
          "title": "Graduate, The (1967)",
          "rating": 5
        },
        {
          "title": "Paper, The (1994)",
          "rating": 5
        },
        {
          "title": "Piano, The (1993)",
          "rating": 5
        },
        {
          "title": "Godfather, The (1972)",
          "rating": 5
        }
      ],
      "recommendations": {
        "baseline": [
          {
            "item_id": 408,
            "title": "Close Shave, A (1995)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1201,
            "title": "Marlene Dietrich: Shadow and Light (1996) ",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1653,
            "title": "Entertaining Angels: The Dorothy Day Story (1996)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1189,
            "title": "Prefontaine (1997)",
            "year": "1997",
            "predicted": 5.0
          },
          {
            "item_id": 1122,
            "title": "They Made Me a Criminal (1939)",
            "year": "1939",
            "predicted": 5.0
          },
          {
            "item_id": 1449,
            "title": "Pather Panchali (1955)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1367,
            "title": "Faust (1994)",
            "year": "1994",
            "predicted": 5.0
          },
          {
            "item_id": 1467,
            "title": "Saint of Fort Washington, The (1993)",
            "year": "1993",
            "predicted": 5.0
          },
          {
            "item_id": 1500,
            "title": "Santa with Muscles (1996)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1599,
            "title": "Someone Else's America (1995)",
            "year": "1996",
            "predicted": 5.0
          }
        ],
        "item_cf": [
          {
            "item_id": 1424,
            "title": "I Like It Like That (1994)",
            "year": "1994",
            "predicted": 5.0
          },
          {
            "item_id": 1371,
            "title": "Machine, The (1994)",
            "year": "1994",
            "predicted": 5.0
          },
          {
            "item_id": 1599,
            "title": "Someone Else's America (1995)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1542,
            "title": "Scarlet Letter, The (1926)",
            "year": "1926",
            "predicted": 5.0
          },
          {
            "item_id": 1476,
            "title": "Raw Deal (1948)",
            "year": "1948",
            "predicted": 5.0
          },
          {
            "item_id": 1653,
            "title": "Entertaining Angels: The Dorothy Day Story (1996)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1372,
            "title": "Stranger, The (1994)",
            "year": "1994",
            "predicted": 5.0
          },
          {
            "item_id": 1668,
            "title": "Wedding Bell Blues (1996)",
            "year": "1997",
            "predicted": 5.0
          },
          {
            "item_id": 1670,
            "title": "Tainted (1998)",
            "year": "1998",
            "predicted": 5.0
          },
          {
            "item_id": 1667,
            "title": "Next Step, The (1995)",
            "year": "1997",
            "predicted": 5.0
          }
        ],
        "mf": [
          {
            "item_id": 1500,
            "title": "Santa with Muscles (1996)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1467,
            "title": "Saint of Fort Washington, The (1993)",
            "year": "1993",
            "predicted": 5.0
          },
          {
            "item_id": 1293,
            "title": "Star Kid (1997)",
            "year": "1998",
            "predicted": 5.0
          },
          {
            "item_id": 1653,
            "title": "Entertaining Angels: The Dorothy Day Story (1996)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1449,
            "title": "Pather Panchali (1955)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1189,
            "title": "Prefontaine (1997)",
            "year": "1997",
            "predicted": 5.0
          },
          {
            "item_id": 1367,
            "title": "Faust (1994)",
            "year": "1994",
            "predicted": 5.0
          },
          {
            "item_id": 1201,
            "title": "Marlene Dietrich: Shadow and Light (1996) ",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1599,
            "title": "Someone Else's America (1995)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1122,
            "title": "They Made Me a Criminal (1939)",
            "year": "1939",
            "predicted": 5.0
          }
        ]
      }
    },
    {
      "user_id": 1,
      "age": 24,
      "gender": "M",
      "occupation": "technician",
      "history": [
        {
          "title": "Toy Story (1995)",
          "rating": 5
        },
        {
          "title": "Maya Lin: A Strong Clear Vision (1994)",
          "rating": 5
        },
        {
          "title": "Monty Python and the Holy Grail (1974)",
          "rating": 5
        },
        {
          "title": "Manon of the Spring (Manon des sources) (1986)",
          "rating": 5
        },
        {
          "title": "Jean de Florette (1986)",
          "rating": 5
        },
        {
          "title": "Sleeper (1973)",
          "rating": 5
        },
        {
          "title": "Big Night (1996)",
          "rating": 5
        },
        {
          "title": "Lone Star (1996)",
          "rating": 5
        }
      ],
      "recommendations": {
        "baseline": [
          {
            "item_id": 1653,
            "title": "Entertaining Angels: The Dorothy Day Story (1996)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1599,
            "title": "Someone Else's America (1995)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1189,
            "title": "Prefontaine (1997)",
            "year": "1997",
            "predicted": 5.0
          },
          {
            "item_id": 1500,
            "title": "Santa with Muscles (1996)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1122,
            "title": "They Made Me a Criminal (1939)",
            "year": "1939",
            "predicted": 5.0
          },
          {
            "item_id": 1293,
            "title": "Star Kid (1997)",
            "year": "1998",
            "predicted": 5.0
          },
          {
            "item_id": 1201,
            "title": "Marlene Dietrich: Shadow and Light (1996) ",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1467,
            "title": "Saint of Fort Washington, The (1993)",
            "year": "1993",
            "predicted": 5.0
          },
          {
            "item_id": 1449,
            "title": "Pather Panchali (1955)",
            "year": "1996",
            "predicted": 4.87
          },
          {
            "item_id": 1367,
            "title": "Faust (1994)",
            "year": "1994",
            "predicted": 4.82
          }
        ],
        "item_cf": [
          {
            "item_id": 1613,
            "title": "Tokyo Fist (1995)",
            "year": "1998",
            "predicted": 5.0
          },
          {
            "item_id": 1293,
            "title": "Star Kid (1997)",
            "year": "1998",
            "predicted": 5.0
          },
          {
            "item_id": 1235,
            "title": "Big Bang Theory, The (1994)",
            "year": "1994",
            "predicted": 4.89
          },
          {
            "item_id": 837,
            "title": "Meet John Doe (1941)",
            "year": "1941",
            "predicted": 4.88
          },
          {
            "item_id": 170,
            "title": "Cinema Paradiso (1988)",
            "year": "1988",
            "predicted": 4.87
          },
          {
            "item_id": 272,
            "title": "Good Will Hunting (1997)",
            "year": "1997",
            "predicted": 4.81
          },
          {
            "item_id": 151,
            "title": "Willy Wonka and the Chocolate Factory (1971)",
            "year": "1971",
            "predicted": 4.8
          },
          {
            "item_id": 174,
            "title": "Raiders of the Lost Ark (1981)",
            "year": "1981",
            "predicted": 4.75
          },
          {
            "item_id": 1342,
            "title": "Convent, The (Convento, O) (1995)",
            "year": "1996",
            "predicted": 4.74
          },
          {
            "item_id": 435,
            "title": "Butch Cassidy and the Sundance Kid (1969)",
            "year": "1969",
            "predicted": 4.7
          }
        ],
        "mf": [
          {
            "item_id": 1599,
            "title": "Someone Else's America (1995)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1201,
            "title": "Marlene Dietrich: Shadow and Light (1996) ",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1189,
            "title": "Prefontaine (1997)",
            "year": "1997",
            "predicted": 5.0
          },
          {
            "item_id": 1293,
            "title": "Star Kid (1997)",
            "year": "1998",
            "predicted": 5.0
          },
          {
            "item_id": 1500,
            "title": "Santa with Muscles (1996)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1122,
            "title": "They Made Me a Criminal (1939)",
            "year": "1939",
            "predicted": 5.0
          },
          {
            "item_id": 1653,
            "title": "Entertaining Angels: The Dorothy Day Story (1996)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1467,
            "title": "Saint of Fort Washington, The (1993)",
            "year": "1993",
            "predicted": 5.0
          },
          {
            "item_id": 100,
            "title": "Fargo (1996)",
            "year": "1997",
            "predicted": 4.94
          },
          {
            "item_id": 318,
            "title": "Schindler's List (1993)",
            "year": "1993",
            "predicted": 4.88
          }
        ]
      }
    },
    {
      "user_id": 42,
      "age": 30,
      "gender": "M",
      "occupation": "administrator",
      "history": [
        {
          "title": "Toy Story (1995)",
          "rating": 5
        },
        {
          "title": "Wizard of Oz, The (1939)",
          "rating": 5
        },
        {
          "title": "Winnie the Pooh and the Blustery Day (1968)",
          "rating": 5
        },
        {
          "title": "Father of the Bride Part II (1995)",
          "rating": 5
        },
        {
          "title": "Cool Hand Luke (1967)",
          "rating": 5
        },
        {
          "title": "Dumbo (1941)",
          "rating": 5
        },
        {
          "title": "Mary Poppins (1964)",
          "rating": 5
        },
        {
          "title": "Ghost (1990)",
          "rating": 5
        }
      ],
      "recommendations": {
        "baseline": [
          {
            "item_id": 1201,
            "title": "Marlene Dietrich: Shadow and Light (1996) ",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1293,
            "title": "Star Kid (1997)",
            "year": "1998",
            "predicted": 5.0
          },
          {
            "item_id": 1599,
            "title": "Someone Else's America (1995)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1189,
            "title": "Prefontaine (1997)",
            "year": "1997",
            "predicted": 5.0
          },
          {
            "item_id": 1467,
            "title": "Saint of Fort Washington, The (1993)",
            "year": "1993",
            "predicted": 5.0
          },
          {
            "item_id": 1122,
            "title": "They Made Me a Criminal (1939)",
            "year": "1939",
            "predicted": 5.0
          },
          {
            "item_id": 1500,
            "title": "Santa with Muscles (1996)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1653,
            "title": "Entertaining Angels: The Dorothy Day Story (1996)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1449,
            "title": "Pather Panchali (1955)",
            "year": "1996",
            "predicted": 4.81
          },
          {
            "item_id": 1367,
            "title": "Faust (1994)",
            "year": "1994",
            "predicted": 4.76
          }
        ],
        "item_cf": [
          {
            "item_id": 1354,
            "title": "Venice/Venice (1992)",
            "year": "1992",
            "predicted": 5.0
          },
          {
            "item_id": 1318,
            "title": "Catwalk (1995)",
            "year": "1996",
            "predicted": 4.85
          },
          {
            "item_id": 1477,
            "title": "Nightwatch (1997)",
            "year": "1997",
            "predicted": 4.66
          },
          {
            "item_id": 1390,
            "title": "Innocent Sleep, The (1995)",
            "year": "1997",
            "predicted": 4.66
          },
          {
            "item_id": 1668,
            "title": "Wedding Bell Blues (1996)",
            "year": "1997",
            "predicted": 4.66
          },
          {
            "item_id": 1670,
            "title": "Tainted (1998)",
            "year": "1998",
            "predicted": 4.66
          },
          {
            "item_id": 1667,
            "title": "Next Step, The (1995)",
            "year": "1997",
            "predicted": 4.66
          },
          {
            "item_id": 257,
            "title": "Men in Black (1997)",
            "year": "1997",
            "predicted": 4.47
          },
          {
            "item_id": 520,
            "title": "Great Escape, The (1963)",
            "year": "1963",
            "predicted": 4.4
          },
          {
            "item_id": 1332,
            "title": "My Life and Times With Antonin Artaud (En compagnie d'Antonin Artaud) (1993)",
            "year": "1993",
            "predicted": 4.38
          }
        ],
        "mf": [
          {
            "item_id": 1189,
            "title": "Prefontaine (1997)",
            "year": "1997",
            "predicted": 5.0
          },
          {
            "item_id": 1201,
            "title": "Marlene Dietrich: Shadow and Light (1996) ",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1599,
            "title": "Someone Else's America (1995)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1500,
            "title": "Santa with Muscles (1996)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1467,
            "title": "Saint of Fort Washington, The (1993)",
            "year": "1993",
            "predicted": 5.0
          },
          {
            "item_id": 1293,
            "title": "Star Kid (1997)",
            "year": "1998",
            "predicted": 5.0
          },
          {
            "item_id": 1122,
            "title": "They Made Me a Criminal (1939)",
            "year": "1939",
            "predicted": 5.0
          },
          {
            "item_id": 1653,
            "title": "Entertaining Angels: The Dorothy Day Story (1996)",
            "year": "1996",
            "predicted": 5.0
          },
          {
            "item_id": 1449,
            "title": "Pather Panchali (1955)",
            "year": "1996",
            "predicted": 4.81
          },
          {
            "item_id": 1367,
            "title": "Faust (1994)",
            "year": "1994",
            "predicted": 4.76
          }
        ]
      }
    }
  ]
};
