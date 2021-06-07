import menu from "@/plugins/menu"

export default function ({route}) {
  let menuItem = _.filter(menu, item=>{
    if(route.path.includes(item.to)){
      return item;
    }
  });
  menuItem = menuItem.length==2 ? menuItem[1] : menuItem[0];
  localStorage.setItem('head',JSON.stringify(menuItem));
}
