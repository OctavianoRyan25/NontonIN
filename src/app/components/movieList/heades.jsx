import Link from "next/link";

const Headers = ({ title, linkHref, linkTitle }) => {
    return (
        <div className="flex justify-between text-medium lg:text-xl mt-6 mx-8 mb-4 lg:mx-32">
            <div className="text-medium lg:text-3xl">{title}</div>
            <div className="">
                {linkHref && linkTitle ? (
                    <Link href={linkHref} className="underline underline-offset-1 text-primary-500">
                        {linkTitle}
                    </Link>
                ) : null}
            </div>
        </div>
    );
};

export default Headers;
