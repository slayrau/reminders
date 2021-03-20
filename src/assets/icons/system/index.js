import { SystemIconNames } from 'src/utils/const';

// C
import { ReactComponent as Calendar } from './calendar.svg';
import { ReactComponent as Checkmark } from './checkmark.svg';
import { ReactComponent as CheckmarkCircle } from './checkmark-circle.svg';
import { ReactComponent as ChevronBackward } from './chevron-backward.svg';

// F
import { ReactComponent as Flag } from './flag.svg';

// P
import { ReactComponent as Plus } from './plus.svg';
import { ReactComponent as PlusCircleOutline } from './plus-circle-outline.svg';

// R
import { ReactComponent as RadioChecked } from './radio-checked.svg';
import { ReactComponent as RadioUnchecked } from './radio-unchecked.svg';

// S
import { ReactComponent as Search } from './search.svg';
import { ReactComponent as SignOut } from './sign-out.svg';

// T
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
  [SystemIconNames.checkmark]: Checkmark,
  [SystemIconNames.checkmarkCircle]: CheckmarkCircle,
  [SystemIconNames.chevronBackward]: ChevronBackward,

  // F
  [SystemIconNames.flag]: Flag,

  // L
  [SystemIconNames.signOut]: SignOut,

  // P
  [SystemIconNames.plus]: Plus,
  [SystemIconNames.plusCircleOutline]: PlusCircleOutline,

  // R
  [SystemIconNames.radioChecked]: RadioChecked,
  [SystemIconNames.radioUnchecked]: RadioUnchecked,

  // S
  [SystemIconNames.search]: Search,

  // T
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
