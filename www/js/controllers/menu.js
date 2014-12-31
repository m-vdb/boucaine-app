module.exports = function ($scope) {
  $scope.monthPizza = {
    title: '4 Fromages',
    recipe: 'Crème, roquefort, chèvre, mozarella, râpée',
    price: 9
  };

  $scope.menu = [
    {
      title: 'La Pizza du Mois',
      items: [
        {
          title: '4 Fromages',
          recipe: 'Crème, roquefort, chèvre, mozarella, râpée',
          price: 9
        }
      ]
    },
    {
      title: 'Les Classics',
      items: [
        {
          title: "Fromage",
          recipe: "Sauce tomate, fromage râpé, olives",
          price: 8
        },
        {
          title: "Anchois",
          recipe: "Sauce tomate, anchois, olive",
          price: 8
        },
        {
          title: "Jambon",
          recipe: "Sauce tomate, jambon, fromage râpé",
          price: 9
        },
        {
          title: "Mozzarella",
          recipe: "Sauce tomate, mozzarella, avec ou sans fromage",
          price: 9
        },
        {
          title: "4 Fromages",
          recipe: "Sauce tomate, roquefort, chèvre, mozzarella, fromage râpé",
          price: 10
        },
        {
          title: "Figatelli",
          recipe: "Sauce tomate, figatelli râpé",
          price: 8
        },
        {
          title: "Chèvre",
          recipe: "Sauce tomate, chèvre râpé",
          price: 8
        }
      ]
    },
    {
      title: 'Les Crèmes',
      items: [
        {
          title: "4 Fromages",
          recipe: "Crème, roquefort, chèvre, mozarella, râpée",
          price: 9
        },
        {
          title: "Fermière",
          recipe: "Oignons, lardons, crème fraîche",
          price: 9
        },
        {
          title: "Montagnarde",
          recipe: "Crème",
          price: 10
        },
        {
          title: "Corse",
          recipe: "Crème, figatelli, brousse",
          price: 11
        },
        {
          title: "Tartiflette",
          recipe: "Crème, pommes de terre, oignons, lardons, reblochon",
          price: 11
        },
        {
          title: "Saumon fumé",
          recipe: "Crème, saumon fumé, fromage, aneth",
          price: 11
        }
      ]
    },
    {
      title: 'Les Spécialités',
      items: [
        {
          title: "La boucaine",
          recipe: "Tomates cerise confites, roquette",
          price: 11
        },
        {
          title: "Pissaladière",
          recipe: "Oignons confits, anchois",
          price: 11
        },
        {
          title: "Arménienne",
          recipe: "Viande hachée, oignons, poivrons, menthe",
          price: 11
        },
        {
          title: "Orientale",
          recipe: "Sauce tomate, merguez, oignons, poivrons, fromage",
          price: 11
        },
        {
          title: "Kebbab",
          recipe: "Kebbab, oignons, poivrons, fromage",
          price: 11
        },
        {
          title: "Chèvre miel",
          recipe: "Sauce tomate, chèvre, miel, fromage",
          price: 11
        },
        {
          title: "Thon-câpres",
          recipe: "Sauce tomate ou crème, thon, câpre",
          price: 11
        },
        {
          title: "Provençale",
          recipe: "Tomates fraîches, mozzarella, anchois, basilic",
          price: 11
        }
      ]
    },
    {
      title: 'Nos Desserts Maison',
      items: [
        {
          title: "Tiramisu",
          price: 5,
          css: {
            price: "item-note-1"
          }
        },
        {
          title: "Chausson Nutella-Banane",
          price: 6,
          css: {
            price: "item-note-1"
          }
        },
        {
          title: "Pizza gourmande (4 personnes)",
          price: 8,
          css: {
            price: "item-note-1"
          }
        }
      ]
    },
    {
      title: 'Nos Boissons',
      items: [
        {
          title: "Coca-Cola",
          price: 3,
          css: {
            price: "item-note-1"
          }
        },
        {
          title: "Orangina",
          price: 3,
          css: {
            price: "item-note-1"
          }
        },
        {
          title: "Fanta",
          price: 3,
          css: {
            price: "item-note-1"
          }
        },
        {
          title: "San Pelldgrino",
          price: 3,
          css: {
            price: "item-note-1"
          }
        },
        {
          title: "Perrier",
          price: 3,
          css: {
            price: "item-note-1"
          }
        },
        {
          title: "Vin Rouge & Rosé",
          price: 10,
          css: {
            price: "item-note-1"
          }
        }
      ]
    },
  ];
};
