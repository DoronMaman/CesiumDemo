/**
 * Created by doron on 4/20/2017.
 */
import {Routes, RouterModule} from '@angular/router';
import {SidenavComponent} from "./sidenav/sidenav.component";
import {AddUserComponent} from "./add-user/add-user.component";
const APP_ROUTERS:Routes=[
  {path:'',component:SidenavComponent},
  {path:'Add',component:AddUserComponent}
];
export const routing=RouterModule.forRoot(APP_ROUTERS);
