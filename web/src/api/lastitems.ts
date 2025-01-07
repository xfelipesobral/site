'use server'

import api from './server'

export interface LastItem {
    id: string
    description: string
    imageUrl: string
    backgroundUrl: string
    type: 'GAME' | 'BOOK'
    lastUsed: Date
    updatedAt: Date
}

export async function apiLastItems(): Promise<LastItem[]> {
    try {
        const { data } = await api().get<LastItem[]>('/lastitems')
        return data
    } catch (e) {
        return []
    }
}
