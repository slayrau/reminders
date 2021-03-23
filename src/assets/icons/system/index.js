import { SystemIconNames } from 'src/utils/const';

// C
import { ReactComponent as Calendar } from './calendar.svg';
import { ReactComponent as Camera } from './camera.svg';
import { ReactComponent as Checkmark } from './checkmark.svg';
import { ReactComponent as CheckmarkCircleFill } from './checkmark-circle-fill.svg';
import { ReactComponent as CheckmarkCircle } from './checkmark-circle.svg';
import { ReactComponent as ChevronBackward } from './chevron-backward.svg';
import { ReactComponent as ChevronRight } from './chevron-right.svg';

// F
import { ReactComponent as Flag } from './flag.svg';

// G
import { ReactComponent as Gear } from './gear.svg';

// M
import { ReactComponent as MoonCircle } from './moon-circle.svg';
import { ReactComponent as MoonFill } from './moon-fill.svg';

// P
import { ReactComponent as PersonCircle } from './person-circle.svg';
import { ReactComponent as PhotoStack } from './photo-stack.svg';
import { ReactComponent as Plus } from './plus.svg';
import { ReactComponent as PlusCircleOutline } from './plus-circle-outline.svg';

// R
import { ReactComponent as RadioChecked } from './radio-checked.svg';
import { ReactComponent as RadioUnchecked } from './radio-unchecked.svg';

// S
import { ReactComponent as Search } from './search.svg';
import { ReactComponent as SignOut } from './sign-out.svg';
import { ReactComponent as Spinner } from './spinner.svg';
import { ReactComponent as SunMax } from './sun-max.svg';

// T
import { ReactComponent as ThemeCircle } from './theme-circle.svg';
import { ReactComponent as Today } from './today.svg';
import { ReactComponent as Trash } from './trash.svg';
import { ReactComponent as TrashCircle } from './trash-circle.svg';
import { ReactComponent as Tray } from './tray.svg';

// X
import { ReactComponent as Xmark } from './xmark.svg';
import { ReactComponent as XmarkCircle } from './xmark-circle.svg';
import { ReactComponent as XmarkCircleFilled } from './xmark-circle-filled.svg';

const SystemIconTypes = {
  // C
  [SystemIconNames.calendar]: Calendar,
  [SystemIconNames.camera]: Camera,
  [SystemIconNames.checkmark]: Checkmark,
  [SystemIconNames.checkmarkCircleFill]: CheckmarkCircleFill,
  [SystemIconNames.checkmarkCircle]: CheckmarkCircle,
  [SystemIconNames.chevronBackward]: ChevronBackward,
  [SystemIconNames.chevronRight]: ChevronRight,

  // F
  [SystemIconNames.flag]: Flag,

  // G
  [SystemIconNames.gear]: Gear,

  // M
  [SystemIconNames.moonCircle]: MoonCircle,
  [SystemIconNames.moonFill]: MoonFill,

  // P
  [SystemIconNames.personCircle]: PersonCircle,
  [SystemIconNames.photoStack]: PhotoStack,
  [SystemIconNames.plus]: Plus,
  [SystemIconNames.plusCircleOutline]: PlusCircleOutline,

  // R
  [SystemIconNames.radioChecked]: RadioChecked,
  [SystemIconNames.radioUnchecked]: RadioUnchecked,

  // S
  [SystemIconNames.search]: Search,
  [SystemIconNames.signOut]: SignOut,
  [SystemIconNames.spinner]: Spinner,
  [SystemIconNames.sunMax]: SunMax,

  // T
  [SystemIconNames.themeCircle]: ThemeCircle,
  [SystemIconNames.today]: Today,
  [SystemIconNames.trash]: Trash,
  [SystemIconNames.trashCircle]: TrashCircle,
  [SystemIconNames.tray]: Tray,

  // X
  [SystemIconNames.xmark]: Xmark,
  [SystemIconNames.xmarkCircle]: XmarkCircle,
  [SystemIconNames.xmarkCircleFilled]: XmarkCircleFilled,
};

export default SystemIconTypes;
