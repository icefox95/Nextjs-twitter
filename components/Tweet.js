import { XIcon } from "@heroicons/react/solid"
import { useState } from "react"

const Tweet = () => {
    const [input,setInput] = useState("")
    const [selectedFile, setSelectedFile] = useState(null)

    return (
        <div className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll scrollbar-hide`}>
            <img 
                src="https://w.namu.la/s/65f16c8a43c2bb416976fc927d42285e87ea837ba850f2cc8e554e8d01c3774ece8ebd55ba54942d5bb746c1392e4e28c4319cc46bfb13bc175b1da05121fb2466c750bcccf78e0fc6697b556fc6a8c576182007b91f118d392632831172e86c" 
                alt="" 
                className="h-11 w-11 rounded-full cursor-pointer"
            />
            <div className="w-full divide-y divide-gray-700">
                <div className={``}>
                    <textarea 
                        value={input} 
                        onChange={(e) => {
                            setInput(e.target.value)   
                        }}
                        rows="2" 
                        placeholder="What's happening?"
                        className="bg-transparent outline-none text-[#d9d9d9] 
                        text-lg placeholder-gray-500 tracking-wide w-full 
                        min-h-[50px]"
                    />

                {selectedFile && (
                    <div className="relative">
                        <div className="absolute w-8 h-8 bg-[#15181c]
                            hover:bg-[#272c26] bg-opacity-75 rounded-full flex
                            items-center top-1 left-1 cursor-pointer">
                            <XIcon className="text-white h-5" />
                        </div>
                        <img 
                            src={selectedFile} 
                            alt="" 
                            className="rounded-2xl max-h-80 object-contain" 
                        />
                    </div>
                )}
                </div>
            </div>
        </div>
    )
}

export default Tweet