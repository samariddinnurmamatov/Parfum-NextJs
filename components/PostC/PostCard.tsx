import Link from 'next/link';
import Image from "next/image";
import React, { Fragment } from 'react'
import { CategoryTypes } from '@/types';


const PostCard = ({_id, name, image}: CategoryTypes) => {
  return (
    <Fragment>
        <Image className="img" width={200} height={400} src={image.url} alt="Image" />
        <Link href={`/category/${_id}`} style={{padding: "12px"}}>{name}</Link>
    </Fragment>
  )
}

export default PostCard