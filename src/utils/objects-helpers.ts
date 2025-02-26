export const updateObjectInArray = <T, K extends keyof T>(
  items: T[],
  itemId: number,
  objPropsName: K,
  newObjProps: Partial<T>,
): T[] => {
  return items.map((u) => {
    if (u[objPropsName] === itemId) {
      return { ...u, ...newObjProps }
    }
    return u
  })
}
