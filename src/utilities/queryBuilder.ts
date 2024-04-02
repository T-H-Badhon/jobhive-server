const querybuilder = (
  query: Record<string, unknown>,
  filterFields: string[]
) => {
  const { searchTerm, ...filter } = query;
  const searchFields = ["name", "email"];
  const andWhere = [];
  if (searchTerm) {
    andWhere.push({
      OR: searchFields.map((field) => {
        return {
          [field]: {
            contains: searchTerm,
            mode: "insensitive",
          },
        };
      }),
    });
  }

  Object.keys(filter).forEach((field) => {
    if (!filterFields.includes(field)) {
      delete filter[field];
    }
  });

  if (Object.keys(filter).length > 0) {
    andWhere.push({
      AND: Object.keys(filter).map((field) => {
        return {
          [field]: {
            equals: filter[field],
          },
        };
      }),
    });
  }

  return andWhere;
};

export default querybuilder;
