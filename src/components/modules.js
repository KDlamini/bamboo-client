const handleSort = (value, products) => {
  let data = [...products];

  switch (value) {
    case 'Relevance':
      data = [...products];
      break;
    case 'High to Low':
      data = data.sort((a, b) => b.price - a.price);
      break;
    case 'Low to High':
      data = data.sort((a, b) => a.price - b.price);
      break;
    case 'Top Rated':
      data = data.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

  return data;
};

export default handleSort;
