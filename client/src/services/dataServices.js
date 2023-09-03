class DataService {
  produtcs = [
    {
      title: "God of War Ragnarok",
      price: 120.99,
      src: "./img/games/God_of_War.webp",
      _id: "1",
    },
  ];

  getProducts() {
    return this.produtcs;
  }
}

export default DataService;
