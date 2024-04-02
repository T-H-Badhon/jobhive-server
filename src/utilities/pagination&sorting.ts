const paginationandSorting = (query: Record<string, unknown>) => {
  const page = Number(query?.page) || 1;
  const limit = Number(query?.limit) || 2;
  const sortBy = query.sortBy || "createdAt";
  const sortOrder = query.sortOrder || "asc";

  return {
    page,
    limit,
    sortBy,
    sortOrder,
  };
};

export default paginationandSorting;
