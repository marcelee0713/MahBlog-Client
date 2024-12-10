import { IconRouteButton } from "@/components/IconRouteButton";
import { signOutUser } from "@/shared/api/user.api";
import { ROUTES, USER_POP_UP_ROUTES } from "@/shared/constants/routes";
import useUser from "@/shared/hooks/user";
import { CallbacksInterface } from "@/shared/ts/interfaces/global";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { HiOutlineLogout } from "react-icons/hi";
import { toast } from "sonner";

interface props {
  parentRef: React.RefObject<HTMLDivElement>;
  setPopUp: Dispatch<SetStateAction<boolean>>;
}

export const UserPopUp = ({ parentRef, setPopUp }: props) => {
  const router = useRouter();

  const { clearUser, toggleFetch } = useUser();

  const cb: CallbacksInterface = {
    onLoading() {
      toast.dismiss();
      toast.loading("Signing out...");
    },
    onError(err) {
      toast.dismiss();
      toast.error(err.message);

      router.replace(ROUTES["Signin"]);

      toggleFetch(false);

      clearUser();
    },
    onSuccess() {
      toast.dismiss();
      toast.success("Successfully sign out.");

      router.replace(ROUTES["Signin"]);

      toggleFetch(false);

      clearUser();
    },
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        parentRef.current &&
        !parentRef.current.contains(event.target as Node)
      ) {
        setPopUp(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="absolute flex flex-col w-[120px] gap-2 p-2 theme-background theme-border right-0 top-[49px] shadow-lg text-sm rounded-lg text-end z-20">
      {USER_POP_UP_ROUTES.map((val, i) => {
        return (
          <IconRouteButton
            {...val}
            key={i}
            onClick={() => setPopUp(false)}
            className="!py-1"
          />
        );
      })}

      <div
        onClick={async () => await signOutUser(cb)}
        className="icon-button-style !py-1"
      >
        <HiOutlineLogout size={20} />
        <div>Sign out</div>
      </div>
    </div>
  );
};
