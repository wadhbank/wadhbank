import { Prisma } from "prisma";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import prisma from "../lib/prisma";
import { fetcher } from "../utils/fetcher";
import { Button, Header, Input } from "../components";
import {
  IconStar,
  ImageAIKMD,
  ImageBlackstone,
  ImageCardPodium,
  ImageCentralFloridaUniversity,
  ImageGeorgetownUniversity,
  ImageLightCircleOrnament,
  ImageLineOrnament,
  ImageMap,
} from "../assets";

export async function getServerSideProps() {
  const users: Prisma.UserUncheckedCreateInput[] = await prisma.user.findMany();
  return {
    props: { initialUsers: users },
  };
}

export function formatDate(string) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(string).toLocaleDateString([]);
}

export default function Home({ initialUsers }) {
  const [users, setUsers] =
    useState<Prisma.UserUncheckedCreateInput[]>(initialUsers);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const formHandle = async (e) => {
    e.preventDefault();
    const body: Prisma.UserCreateInput = {
      fullName,
      email,
    };

    await fetcher("/api/create", { user: body });
    await setUsers([...users, body]);
    setFullName("");
    setEmail("");
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div style={{ minHeight: "50vh" }} className="grid items-center">
        <div className="bg-white-100 transition-all duration-300 md:px-4 md:pt-8 px-0 pl-20 pr-7 pt-20">
          <div className="flex md:flex-col md:gap-12 relative">
            <div className="flex flex-col z-30 w-1/2 md:w-full">
              <div className="flex flex-row gap-2 md:mb-4 lg:mb-5 mb-6">
                <IconStar height={20} width={20} />
                <div className="xs:prose-extra-small-medium prose-small-medium text-black-80 uppercase">
                  Get up to $250 when you open up an account
                </div>
              </div>
              <div className="xl:prose-heading-3 lg:prose-heading-5 prose-heading-1 md:mb-5 mb-6 text-black-100">
                Digital halal banking made for everyone
              </div>
              <div className="md:prose-small-regular prose-normal-regular text-black-80 md:mb-8 mb-14 w-11/12">
                Combining latest blockchain technologies and islamic financial
                guidelines to deliver safe and secure islamic banking service
                through mobile platform.
              </div>
              <div className="md:prose-small-medium prose-normal-medium text-black-100 md:mb-4 mb-5">
                Join our waiting list to get early access to halal, ethical
                banking services.&nbsp;
                <Link passHref href="/">
                  <span className="underline font-bold cursor-pointer">
                    Learn more
                  </span>
                </Link>
              </div>
              <div className="flex flex-row md:flex-col md:gap-2 md:mb-8 lg:mb-12 xxl:mb-16 mb-24 md:w-full items-stretch bg-white-60">
                <Input
                  placeholder="Full name"
                  className="rounded-r-none md:rounded-10 flex-1 xs:py-4 xs:prose-small-regular"
                />
                <Input
                  placeholder="Email"
                  className="md:rounded-10 rounded-none flex-1 xs:py-4 xs:prose-small-regular"
                />
                <Button
                  size="medium"
                  theme="primary"
                  className="rounded-l-none md:rounded-10 md:w-full xs:py-4"
                >
                  Sign up
                </Button>
              </div>
              <div className="flex flex-row lg:gap-9 gap-14 items-center md:justify-center mb-10">
                <Image
                  src={ImageGeorgetownUniversity}
                  alt="georgetown-university"
                  layout="intrinsic"
                />
                <Image
                  src={ImageCentralFloridaUniversity}
                  alt="university-central-florida"
                  layout="intrinsic"
                />
                <Image
                  src={ImageBlackstone}
                  alt="blackstone"
                  layout="intrinsic"
                />
                <Image src={ImageAIKMD} alt="aikmd" layout="intrinsic" />
              </div>
            </div>
            <div className="w-1/2 md:w-full right-0 bottom-0 grid absolute md:relative justify-center">
              <Image
                src={ImageCardPodium}
                alt="card-podium"
                layout="intrinsic"
                objectFit="contain"
                objectPosition="center right"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen md:min-h-full bg-primary-base grid overflow-hidden relative">
        <div className="flex sm:flex-col flex-row md:px-0 md:py-10 pl-20 py-28 gap-10 justify-between ">
          <div className="flex flex-col md:gap-8 md:px-4 gap-10 relative sm:w-full w-6/12">
            <div className="grid md:gap-5 gap-8">
              <div className="lg:prose-heading-5 prose-heading-1 text-white-100 z-10">
                The easiest-way to bank riba-free for all your banking needs.
              </div>
              <div className="prose-small-regular text-white-100 z-10 xs:pr-2">
                With WadhBank, you can bank everywhere around the world just
                using our mobile platform.
              </div>
              <div className="z-0 absolute grid sm:w-48 sm:h-48 w-full h-full -top-1/3 md:top-0">
                <Image
                  src={ImageLightCircleOrnament}
                  alt="light-circle-ornament"
                  layout="responsive"
                  height="50vh"
                  width="50vw"
                />
              </div>
            </div>
            <div className="z-10">
              <Button
                theme="secondary"
                size="medium"
                className="px-6 py-5 xs:py-4 xs:prose-small-bold"
              >
                Get to know more about WadhBank
              </Button>
            </div>
          </div>
          <div
            style={{ minHeight: "35vh" }}
            className="flex flex-col md:gap-7 md:pl-4 gap-16 z-10 relative sm:w-full w-5/12 md:mt-0 md:transform-none transform translate-y-1/4 "
          >
            <div className="flex flex-col md:gap-3 gap-4 pr-20 md:pr-0 xs:w-7/12">
              <div className="md:prose-heading-5 prose-heading-1 z-10 text-white-100">
                1.5K+
              </div>
              <div className="md:prose-small-regular prose-heading-6 font-regular text-white-80">
                Excited waitlisted customers around the world
              </div>
            </div>
            <div className="flex flex-col md:gap-3 gap-4 pr-20 md:pr-0 xs:w-7/12">
              <div className="md:prose-heading-5 prose-heading-1  z-10 text-white-100">
                150+
              </div>
              <div className="md:prose-small-regular prose-heading-6 font-regular text-white-80">
                Years of advisory board experience
              </div>
            </div>
            <div className="z-0 absolute sm:left-1/3 -left-1/3 grid md:h-full h-4/6">
              <Image
                src={ImageMap}
                alt="light-circle-ornament"
                layout="intrinsic"
                objectFit="cover"
                objectPosition="left"
              />
            </div>
          </div>
        </div>
        <div className="absolute w-full p-4 grid">
          <Image src={ImageLineOrnament} alt="" layout="intrinsic" />
        </div>
      </div>
      <form onSubmit={formHandle}>
        <div className="flex "></div>
        <input
          className="bg-white rounded-sm border border-indigo-700"
          type="text"
          onChange={(e) => {
            return setFullName(e.target.value);
          }}
          value={fullName}
        />
        <input
          className="bg-white rounded-sm border border-indigo-700"
          type="text"
          onChange={(e) => {
            return setEmail(e.target.value);
          }}
          value={email}
        />
        <button>Submit</button>
      </form>

      {users.map((u, index) => {
        return (
          <>
            <div className="flex" key={index}>
              <p>
                {u.fullName}| {u.email}
              </p>
            </div>
            <input
              className="bg-white rounded-sm border border-indigo-700"
              type="text"
              onChange={(e) => {
                return setFullName(e.target.value);
              }}
              value={fullName}
            />
            <input
              className="bg-white rounded-sm border border-indigo-700"
              type="text"
              onChange={(e) => {
                return setEmail(e.target.value);
              }}
              value={email}
            />

            <button>Submit</button>
          </>
        );
      })}

     {users.map((u, index)=>
     <div className="flex" key={index}>
       <p> {u.id} |{u.fullName}| {u.email} | {formatDate(u.dateCreated)}</p>
     </div>
     )}
      
    </div>
  );
}
