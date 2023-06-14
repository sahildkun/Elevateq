'use client'
import React, { FormEvent } from 'react'
import { useState } from 'react'
import { useQuery,useMutation,useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

type Props = {}

const AddPost = (props: Props) => {
    const [title, setTitle] = useState<string>("")
    const [isDisabled, setIsDisabled] = useState(false);

   const  toastPostId = 'err'
    const queryClient = useQueryClient()
    const { mutate } = useMutation(
      async (title: string): Promise<void> => 
        await axios.post("/api/posts/addPost", { title } ),
        {
          onError: (error: any) => {
            console.log(error);
            toast.error(error?.response.data.message, {id: toastPostId})
            setIsDisabled(false)
          },
          onSuccess: (data) => {
         
           
            queryClient.invalidateQueries({queryKey: ['posts']})
            toast.success('Post has been made', {id: toastPostId})
            setTitle('');
            setIsDisabled(false)
          }
        }
        );
        

   const submitPost = async (event : FormEvent) => {
     
   
     event.preventDefault();
    
     setIsDisabled(true)
     toast.loading('Uploading',{id: toastPostId})
     mutate(title);
    
   }

  return (
    <>
    
   
     
    <form onSubmit={submitPost} className="my-8 p-8 rounded-md bg-white bg-opacity-20 ">
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