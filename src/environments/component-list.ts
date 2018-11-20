import { ViewProfileComponent } from "../app/profile/view-profile/view-profile.component";
import { EntryComponentsModule } from "../app/entry-components.module";

export const componentList = {
    ProfileModule: {
        components: {
            ViewProfileComponent: ViewProfileComponent
        }
    },
    entryComponentModule: EntryComponentsModule
}