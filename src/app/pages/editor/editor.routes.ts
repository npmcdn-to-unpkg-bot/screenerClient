import { RouterConfig } from '@angular/router';
import { KeyEdit, MasterScreenerEdit, ProgramsEdit } from '../../components';
import { Editor } from './editor.component';

export const EditorRoutes: RouterConfig = [
  {
    path: 'editor',
    component: Editor,
    children: [
      {path: 'master-screener', component: MasterScreenerEdit},
      {path: 'keys', component: KeyEdit},
      {path: 'programs', component: ProgramsEdit}
    ]
  }
];