export interface MenuItem {
  name: string,
  id: number,
  parentId?: number,
  subMenu?: MenuItem[];
}
