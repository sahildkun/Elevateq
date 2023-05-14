'use client'
import React, { FormEvent } from 'react'
import { useState } from 'react'
import { useQuery,useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { Toaster, toast } from 'sonner'
type Props = {}

const AddPost = (props: Props) => {
    const [title, setTitle] = useState<string>("")
    const [isDisabled, setIsDisabled] = useState(false);
    

    const { mutate } = useMutation(
      async (title: string): Promise<void> => 
        await axios.post("/api/addPost", { title } ),
        {
          onError: (error: any) => {
            console.log(error);
            toast(error?.response.data.message)
          },
          onSuccess: (data) => {
            console.log(data);
            setTitle('');
            setIsDisabled(false)
          }
        }
        );
    

   const submitPost = async (event : FormEvent) => {
     event.preventDefault();
     setIsDisabled(true)
     mutate(title);
  
   }

  return (
    <>
    <Toaster/>
    <form onSubmit={submitPost} className="bg-white my-8 p-8 rounded-md ">
      <div className="flex flex-col my-4">
        <textarea
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          name="title"
          placeholder="What's on your mind?"
          className="p-4 text-lg rounded-md my-2 text-black bg-gray-200"
        />
      </div>
      <div className=" flex items-center justify-between gap-2">
        <p
          className={`font-bold text-sm ${
            title.length > 300 ? "text-red-700" : "text-gray-700"
          } `}
        >{`${title.length}/300`}</p>
        <button
          disabled={isDisabled}
          className="text-sm bg-teal-600 text-white py-2 px-6 rounded-xl disabled:opacity-25"
          type="submit"
        >
          Create post
        </button>
      </div>
    </form>
    </>
  )
}

export default AddPost