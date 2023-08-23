import Link from "next/link";
import React from "react";

type Props = { title: string; address: string; Icon: any };

const MenuItem = ({ title, address, Icon }: Props) => {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
        <Icon className="text-2xl mx-4 sm:hidden" />
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
};

export default MenuItem;
