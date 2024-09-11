import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/SimpleLayout'
import React from "react";
import Posts from "@/components/Posts";
import {sanityFetch} from "@/sanity/lib/fetch";
import {SanityDocument} from "@sanity/client";
import {postsQuery} from "@/sanity/lib/queries";


export const metadata: Metadata = {
    title: 'Projects',
    description: 'Things I’ve made trying to put my dent in the universe.',
}

export const revalidate = 10;
export const dynamic = 'force-dynamic';

export default async function Adventures() {

    const posts = await sanityFetch<SanityDocument[]>({query: postsQuery})

    return (
        <SimpleLayout
            title="Bits of Expeditions"
            intro={''}
        >
            <ul
                role="list"
                className="flex flex-wrap"
            >

                <Posts posts={posts}/>
            </ul>
        </SimpleLayout>
    )
}
