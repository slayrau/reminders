import { SystemIconNames } from 'src/utils/const';

// C
import { ReactComponent as Calendar } from './calendar.svg';

// F
import { ReactComponent as Flag } from './flag.svg';

// P
import { ReactComponent as PlusCircleOutline } from './plus-circle-outline.svg';

// S
import { ReactComponent as Search } from './search.svg';
import { ReactComponent as SignOut } from './sign-out.svg';

// T
import { ReactComponent as Today } from './today.svg';
import { ReactComponent as Tray } from './tray.svg';

// X
import { ReactComponent as XmarkCircleFilled } from './xmark-circle-filled.svg';

const SystemIconTypes = {
  // C
  [SystemIconNames.calendar]: Calendar,

  // F
  [SystemIconNames.flag]: Flag,

  // L
  [SystemIconNames.signOut]: SignOut,

  // P
  [SystemIconNames.plusCircleOutline]: PlusCircleOutline,

  // S
  [SystemIconNames.search]: Search,

  // T
  [SystemIconNames.today]: Today,
  [SystemIconNames.tray]: Tray,

  // X
  [SystemIconNames.xmarkCircleFilled]: XmarkCircleFilled,
};

export default SystemIconTypes;
