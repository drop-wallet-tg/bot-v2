import Link from "next/link";

export default function CreateWallet(){
    return(
        <div className="w-full min-h-screen flex justify-between flex-col bg-[#180E35]">
            <div className="flex flex-col px-3 w-full justify-center items-center pt-8 mt-[6rem]">
                <div className="flex flex-col gap-3 justify-center items-center">
                    <img width={150} src="/images/logo/logo.svg" alt="logo" />
                    <label className="text-2xl font-semibold text-white mt-2">New Wallet</label>
                    <p className="text-normal w-2/3 text-center text-[#716D9C]">Choose how you&apos;d like to set up your wallet</p>
                </div>
                <div className="mt-20 w-full flex flex-col justify-center items-center">
                    <Link href="/wallet/create-account" className="px-6 py-3 text-center bg-[#2775CA] hover:bg-[#4f95e1] w-3/4 rounded-3xl font-semibold text-white">
                        <p>Create a new Wallet</p>
                    </Link>
                </div>
                <div className="pt-16">
                    <Link href="/wallet/import-wallet">
                        <span className="underline text-[#ffffffa7] hover:text-white">Import an existing wallet</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}