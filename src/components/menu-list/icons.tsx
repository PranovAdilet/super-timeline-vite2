import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  FileText,
  FolderClosed,
  HelpCircle,
  Home,
  Image,
  Laptop,
  LayoutPanelLeft,
  LineChart,
  Loader2,
  LucideIcon,
  LucideProps,
  MessagesSquare,
  Moon,
  MoreVertical,
  Package,
  Plus,
  Puzzle,
  Search,
  Settings,
  SunMedium,
  Trash,
  Type,
  User,
  X,
  Square,
  RectangleVertical,
  RectangleHorizontal,
  WandSparkles,
  Zap,
  Music,
  VideoIcon,
  Captions,
  ListVideo,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  add: Plus,
  audio: Music,
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  billing: CreditCard,
  bookOpen: BookOpen,
  captions: Captions,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  check: Check,
  close: X,
  copy: Copy,
  dashboard: LayoutPanelLeft,
  ellipsis: MoreVertical,
  folder: FolderClosed,
  tracksettings: ListVideo,
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  google: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="google"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 488 512"
      {...props}
    >
      <path
        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
        fill="currentColor"
      />
    </svg>
  ),
  nextjs: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="nextjs"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        fill="currentColor"
        d="m4.5 4.5l.405-.293A.5.5 0 0 0 4 4.5zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM5 12V4.5H4V12zm-.905-7.207l6.5 9l.81-.586l-6.5-9zM10 4v6h1V4z"
      ></path>
    </svg>
  ),
  help: HelpCircle,
  home: Home,
  image: Image,
  landscape: RectangleHorizontal,
  laptop: Laptop,
  lineChart: LineChart,
  logo: Puzzle,
  media: Image,
  messages: MessagesSquare,
  moon: Moon,
  package: Package,
  page: File,
  portrait: RectangleVertical,
  post: FileText,
  preset: Zap,
  search: Search,
  square: Square,
  redo: ({ ...props }: LucideProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2957 4.15721C13.9052 3.76669 13.9052 3.13352 14.2957 2.743C14.6862 2.35247 15.3194 2.35247 15.7099 2.743L20.953 7.98603C21.1387 8.16758 21.2539 8.42087 21.2539 8.70108C21.2539 8.70111 21.2539 8.70114 21.2539 8.70117C21.2539 8.70431 21.2539 8.70744 21.2539 8.71057C21.2518 8.93273 21.1773 9.13757 21.0528 9.30262C21.0249 9.33973 20.9942 9.37505 20.961 9.40828L15.7099 14.6593C15.3194 15.0499 14.6862 15.0499 14.2957 14.6593C13.9052 14.2688 13.9052 13.6357 14.2957 13.2451L17.8398 9.70108H9.22665C8.59943 9.70108 7.97836 9.82462 7.39888 10.0646C6.81941 10.3047 6.29289 10.6565 5.84938 11.1C5.40587 11.5435 5.05406 12.07 4.81403 12.6495C4.57401 13.229 4.45047 13.85 4.45047 14.4773C4.45047 15.1045 4.57401 15.7256 4.81403 16.305C5.05406 16.8845 5.40587 17.411 5.84938 17.8545C6.29289 18.298 6.81941 18.6498 7.39888 18.8899C7.97836 19.1299 8.59943 19.2534 9.22665 19.2534H12.9024C13.4547 19.2534 13.9024 19.7012 13.9024 20.2534C13.9024 20.8057 13.4547 21.2534 12.9024 21.2534H9.22665C8.33679 21.2534 7.45564 21.0782 6.63352 20.7376C5.81139 20.3971 5.06439 19.898 4.43517 19.2687C3.80594 18.6395 3.30681 17.8925 2.96627 17.0704C2.62574 16.2483 2.45047 15.3671 2.45047 14.4773C2.45047 13.5874 2.62574 12.7063 2.96627 11.8841C3.30681 11.062 3.80594 10.315 4.43517 9.68578C5.06439 9.05655 5.81139 8.55742 6.63352 8.21689C7.45564 7.87635 8.33679 7.70108 9.22665 7.70108H17.8396L14.2957 4.15721Z"
        fill="currentColor"
      />
    </svg>
  ),
  shapes: ({ ...props }: LucideProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2077_2705)">
        <path
          d="M3.75 12H2.25V20.25C2.25 20.6478 2.40804 21.0294 2.68934 21.3107C2.97064 21.592 3.35218 21.75 3.75 21.75H9.75V20.25H3.75V12ZM21 21.75H12.75C12.6197 21.75 12.4916 21.716 12.3784 21.6514C12.2652 21.5868 12.1708 21.4938 12.1045 21.3816C12.0382 21.2694 12.0022 21.1419 12.0002 21.0116C11.9982 20.8813 12.0302 20.7527 12.093 20.6385L16.218 13.1385C16.2821 13.0203 16.377 12.9218 16.4928 12.8534C16.6085 12.7849 16.7406 12.7492 16.875 12.75C17.1322 12.75 17.3895 12.879 17.532 13.1385L21.657 20.6385C21.7198 20.7527 21.7518 20.8813 21.7498 21.0116C21.7478 21.1419 21.7118 21.2694 21.6455 21.3816C21.5792 21.4938 21.4848 21.5868 21.3716 21.6514C21.2584 21.716 21.1303 21.75 21 21.75ZM14.0182 20.25H19.7318L16.875 15.0563L14.0182 20.25ZM20.25 2.25H12V3.75H20.25V14.244H21.75V3.75C21.75 3.35218 21.592 2.97064 21.3107 2.68934C21.0294 2.40804 20.6478 2.25 20.25 2.25ZM8.25 2.25H3.75C3.35218 2.25 2.97064 2.40804 2.68934 2.68934C2.40804 2.97064 2.25 3.35218 2.25 3.75V8.25C2.25 8.64782 2.40804 9.02936 2.68934 9.31066C2.97064 9.59196 3.35218 9.75 3.75 9.75H8.25C8.64782 9.75 9.02936 9.59196 9.31066 9.31066C9.59196 9.02936 9.75 8.64782 9.75 8.25V3.75C9.75 3.35218 9.59196 2.97064 9.31066 2.68934C9.02936 2.40804 8.64782 2.25 8.25 2.25ZM8.25 8.25H3.75V3.75H8.25V8.25Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_2077_2705">
          <rect
            width="24"
            height="24"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  settings: Settings,
  smart: WandSparkles,
  spinner: Loader2,
  sun: SunMedium,
  templates: ({ ...props }: LucideProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2077_2714)">
        <path
          d="M19.5 4.5V7.5H4.5V4.5H19.5ZM19.5 3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V7.5C3 7.89782 3.15804 8.27936 3.43934 8.56066C3.72064 8.84196 4.10218 9 4.5 9H19.5C19.8978 9 20.2794 8.84196 20.5607 8.56066C20.842 8.27936 21 7.89782 21 7.5V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3ZM7.5 12V19.5H4.5V12H7.5ZM7.5 10.5H4.5C4.10218 10.5 3.72064 10.658 3.43934 10.9393C3.15804 11.2206 3 11.6022 3 12V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H7.5C7.89782 21 8.27936 20.842 8.56066 20.5607C8.84196 20.2794 9 19.8978 9 19.5V12C9 11.6022 8.84196 11.2206 8.56066 10.9393C8.27936 10.658 7.89782 10.5 7.5 10.5ZM19.5 12V19.5H12V12H19.5ZM19.5 10.5H12C11.6022 10.5 11.2206 10.658 10.9393 10.9393C10.658 11.2206 10.5 11.6022 10.5 12V19.5C10.5 19.8978 10.658 20.2794 10.9393 20.5607C11.2206 20.842 11.6022 21 12 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V12C21 11.6022 20.842 11.2206 20.5607 10.9393C20.2794 10.658 19.8978 10.5 19.5 10.5Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_2077_2714">
          <rect
            width="24"
            height="24"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  text: Type,

  trash: Trash,
  twitter: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="twitter"
      role="img"
      {...props}
    >
      <path
        d="M14.258 10.152L23.176 0h-2.113l-7.747 8.813L7.133 0H0l9.352 13.328L0 23.973h2.113l8.176-9.309 6.531 9.309h7.133zm-2.895 3.293l-.949-1.328L2.875 1.56h3.246l6.086 8.523.945 1.328 7.91 11.078h-3.246zm0 0"
        fill="currentColor"
      />
    </svg>
  ),
  type: Type,
  undo: ({ ...props }: LucideProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.60387 4.30711C9.99439 3.91659 9.99439 3.28342 9.60387 2.8929C9.21334 2.50238 8.58018 2.50237 8.18965 2.8929L2.8925 8.19004C2.70497 8.37758 2.59961 8.63193 2.59961 8.89715C2.59961 9.16237 2.70497 9.41672 2.8925 9.60426L8.18965 14.9014C8.58018 15.2919 9.21334 15.2919 9.60387 14.9014C9.99439 14.5109 9.99439 13.8777 9.60387 13.4872L5.86478 9.7481H15.1044C15.7383 9.7481 16.366 9.87295 16.9516 10.1155C17.5372 10.3581 18.0693 10.7136 18.5176 11.1619C18.9658 11.6101 19.3213 12.1422 19.5639 12.7278C19.8065 13.3134 19.9313 13.9411 19.9313 14.575C19.9313 15.2088 19.8065 15.8365 19.5639 16.4221C19.3213 17.0077 18.9658 17.5398 18.5176 17.9881C18.0693 18.4363 17.5372 18.7918 16.9516 19.0344C16.366 19.277 15.7383 19.4018 15.1044 19.4018H11.3964C10.8442 19.4018 10.3964 19.8495 10.3964 20.4018C10.3964 20.9541 10.8442 21.4018 11.3964 21.4018H15.1044C16.001 21.4018 16.8887 21.2252 17.717 20.8822C18.5452 20.5391 19.2978 20.0362 19.9318 19.4023C20.5657 18.7683 21.0686 18.0158 21.4116 17.1875C21.7547 16.3592 21.9313 15.4715 21.9313 14.575C21.9313 13.6784 21.7547 12.7907 21.4116 11.9624C21.0686 11.1342 20.5657 10.3816 19.9318 9.74764C19.2978 9.11371 18.5452 8.61085 17.717 8.26777C16.8887 7.92469 16.001 7.7481 15.1044 7.7481H6.16287L9.60387 4.30711Z"
        fill="currentColor"
      />
    </svg>
  ),
  upload: ({ ...props }: LucideProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2077_2699)">
        <path
          d="M8.25 13.5L9.3075 14.5575L11.25 12.6225V21.75H12.75V12.6225L14.6925 14.5575L15.75 13.5L12 9.75L8.25 13.5Z"
          fill="currentColor"
        />
        <path
          d="M17.6249 16.5004H17.2499V15.0004H17.6249C18.52 15.0362 19.3927 14.715 20.0509 14.1074C20.7092 13.4997 21.0991 12.6555 21.1349 11.7604C21.1707 10.8653 20.8495 9.99264 20.2418 9.33438C19.6342 8.67613 18.79 8.28621 17.8949 8.25041H17.2499L17.1749 7.63541C17.0085 6.37275 16.3888 5.21362 15.4312 4.37395C14.4736 3.53428 13.2435 3.07132 11.9699 3.07132C10.6963 3.07132 9.46616 3.53428 8.50857 4.37395C7.55099 5.21362 6.93129 6.37275 6.76489 7.63541L6.74989 8.25041H6.10489C5.20979 8.28621 4.36557 8.67613 3.75795 9.33438C3.15033 9.99264 2.82909 10.8653 2.86489 11.7604C2.9007 12.6555 3.29062 13.4997 3.94887 14.1074C4.60712 14.715 5.47979 15.0362 6.37489 15.0004H6.74989V16.5004H6.37489C5.1722 16.4928 4.01477 16.0409 3.12513 15.2315C2.2355 14.4221 1.67646 13.3124 1.55549 12.1158C1.43453 10.9192 1.76018 9.72009 2.46983 8.74905C3.17949 7.77801 4.22305 7.10357 5.39989 6.85541C5.72367 5.3453 6.55552 3.99189 7.75663 3.02101C8.95774 2.05013 10.4555 1.52051 11.9999 1.52051C13.5443 1.52051 15.042 2.05013 16.2432 3.02101C17.4443 3.99189 18.2761 5.3453 18.5999 6.85541C19.7767 7.10357 20.8203 7.77801 21.53 8.74905C22.2396 9.72009 22.5653 10.9192 22.4443 12.1158C22.3233 13.3124 21.7643 14.4221 20.8747 15.2315C19.985 16.0409 18.8276 16.4928 17.6249 16.5004Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_2077_2699">
          <rect
            width="24"
            height="24"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  user: User,
  video: VideoIcon,
  warning: AlertTriangle,
};
