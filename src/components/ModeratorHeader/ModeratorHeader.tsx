// src/components/ModeratorHeader/ModeratorHeader.tsx
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/useStore";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const ModeratorHeader = () => {
  const navigate = useNavigate();
  const { userEmail, logout } = useStore();
  const isMobile = !useMediaQuery("(min-width: 768px)");

  return (
    <header className="h-14 md:h-16 bg-gray-800 text-white px-3 md:px-6 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-1 md:gap-2 min-w-0">
        <span className="text-lg md:text-xl font-bold cursor-pointer whitespace-nowrap" onClick={() => navigate("/")}>
          LocalGems
        </span>
        {!isMobile && (
          <span className="text-sm text-gray-400 ml-1 md:ml-2 whitespace-nowrap">| ЛК модератора</span>
        )}
        {isMobile && (
          <span className="text-xs text-gray-400 ml-1 truncate max-w-[80px]">| Модератор</span>
        )}
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        {/* На мобилке почту не показываем */}
        {!isMobile && (
          <span className="text-sm text-gray-300 truncate max-w-[200px]">
            {userEmail}
          </span>
        )}
        <button
          className="text-xs md:text-sm font-medium text-red-400 hover:text-red-300 transition whitespace-nowrap"
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          Выйти
        </button>
      </div>
    </header>
  );
};

export default ModeratorHeader;