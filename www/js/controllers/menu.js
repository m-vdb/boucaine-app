module.exports = function ($scope) {
  $scope.monthPizza = {
    title: '4 Fromages',
    recipe: 'Crème, roquefort, chèvre, mozzarella, fromage râpé',
    price: 9
  };

  $scope.menu = [
    {
      title: 'La Pizza du Mois',
      items: [
        {
          title: 'Veuillez demander au camion',
          recipe: '',
          price: 0,
          css: {
            price: "item-note-month-pizza"
          }

        }
      ]
    },
    {
      title: 'Les Classiques',
      items: [
        {
          title: "Fromage",
          recipe: "Sauce tomate, fromage râpé, olives",
          price: 8.5
        },
        {
          title: "Anchois",
          recipe: "Sauce tomate, anchois, olives",
          price: 8
        },
        {
          title: "Jambon",
          recipe: "Sauce tomate, jambon, fromage râpé, olives",
          price: 9.5
        },
        {
          title: "Mozzarella",
          recipe: "Sauce tomate, mozzarella, avec ou sans fromage râpé, olives",
          price: 9.5
        },
        {
          title: "4 Fromages",
          recipe: "Sauce tomate, roquefort, chèvre, mozzarella, fromage râpé, olives",
          price: 11
        },
        {
          title: "Figatelli",
          recipe: "Sauce tomate, figatelli, fromage râpé, olives",
          price: 11
        },
        {
          title: "Chèvre",
          recipe: "Sauce tomate, chèvre, fromage râpé, olives",
          price: 11
        },
        {
          title: "Royale",
          recipe: "Sauce tomate, jambon, champignons, fromage râpé, olives noires",
          price: 11
        }
      ]
    },
    {
      title: 'Les Crèmes',
      items: [
        {
          title: "4 Fromages",
          recipe: "Crème fraîche, roquefort, chèvre, mozzarella, fromage râpé, olives",
          price: 11
        },
        {
          title: "Fermière",
          recipe: "Oignons, lardons, crème fraîche, fromage râpé, olives",
          price: 10.5
        },
        {
          title: "Corse",
          recipe: "Crème fraîche, figatelli, brousse, fromage râpé, olives",
          price: 11
        },
        {
          title: "Tartiflette",
          recipe: "Crème fraîche, pommes de terre, oignons, lardons, reblochon, fromage râpé, olives",
          price: 11
        },
        {
          title: "Saumon fumé",
          recipe: "Crème fraîche, saumon fumé, fromage râpé, aneth, olives",
          price: 11
        }
      ]
    },
    {
      title: 'Les Spécialités',
      items: [
        {
          title: "La boucaine",
          recipe: "Après cuisson : Tomates cerises confites, roquette, burrata, olives, huile d'olive",
          price: 12.5
        },
        {
          title: "Pissaladière",
          recipe: "Oignons confits, anchois, olives",
          price: 11
        },
        {
          title: "Arménienne",
          recipe: "Sauce tomate, viande hachée, oignons, poivrons, menthe, olives",
          price: 11
        },
        {
          title: "Orientale",
          recipe: "Sauce tomate, merguez, oignons, poivrons, fromage râpé, olives",
          price: 11
        },
        {
          title: "Kebbab",
          recipe: "Sauce tomate ou crème fraîche, kebbab, oignons, poivrons, fromage râpé, olives",
          price: 11
        },
        {
          title: "Chèvre miel",
          recipe: "Sauce tomate, chèvre, miel, fromage râpé, olives",
          price: 11
        },
        {
          title: "Thon-câpres",
          recipe: "Sauce tomate ou crème fraîche, thon, câpres, fromage râpé, olives",
          price: 11
        },
        {
          title: "Provençale",
          recipe: "Tomates fraîches, mozzarella, anchois, basilic, olives",
          price: 11.5
        },
        {
          title: "A la Scarole",
          recipe: "Scarole, anchois, olives noires, huile d'olive",
          price: 14
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
          title: "Panacotta à la vanille ou chocolat",
          price: 5,
          css: {
            price: "item-note-1"
          }
        },
        {
          title: "Panettone aux raisins secs ou chocolat",
          price: 5.5,
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
          title: "Coca-Cola - 1.5 L",
          price: 3,
          css: {
            price: "item-note-1"
          }
        },
        {
          title: "Orangina - 1.5 L",
          price: 3,
          css: {
            price: "item-note-1"
          }
        },
        {
          title: "Fanta - 1.5 L",
          price: 3,
          css: {
            price: "item-note-1"
          }
        },
        {
          title: "San Pellegrino - 1.5 L",
          price: 1.5,
          css: {
            price: "item-note-1"
          }
        },
        {
          title: "Perrier - 1.5 L",
          price: 1.5,
          css: {
            price: "item-note-1"
          }
        },
        {
          title: "Vin Rouge & Rosé - 75 cl",
          price: 6.5,
          css: {
            price: "item-note-1"
          }
        },
        {
          title: "Jus de fruits artisanal - 1 L",
          price: 6.5,
          css: {
            price: "item-note-1"
          }
        }
      ]
    },
  ];
};
