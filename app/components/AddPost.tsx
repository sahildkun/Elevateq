'use client'
import React from 'react'
import { useState } from 'react'
type Props = {}

const AddPost = (props: Props) => {
    const [title, setTitle] = useState("")
    const [isDisabled, setIsDisabled] = useState(false)
  return (
    <form  className="bg-white my-8 p-8 rounded-md ">
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
  )
}

export default AddPost