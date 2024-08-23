import { LastItem, LastItemType } from '@prisma/client'

import { prisma } from '../db'

interface UpsertItemParams {
    id: string
    type: LastItemType
    description: string
    imageUrl?: string
    backgroundUrl?: string
    lastUsed: Date
}

export class LastItemModel {
    private prisma = prisma.lastItem

    findAllItems(): Promise<LastItem[]> {
        return this.prisma.findMany()
    }

    findLastItem(): Promise<LastItem | null> {
        return this.prisma.findFirst({
            orderBy: {
                lastUsed: 'desc'
            }
        })
    }

    findLastItemByType(type: LastItemType): Promise<LastItem | null> {
        return this.prisma.findFirst({
            where: {
                type
            },
            orderBy: {
                lastUsed: 'desc'
            }
        })
    }

    findLastItemById(id: string): Promise<LastItem | null> {
        return this.prisma.findFirst({
            where: {
                id
            },
            orderBy: {
                lastUsed: 'desc'
            }
        })
    }

    upsertItem({
        description,
        id,
        lastUsed,
        type,
        backgroundUrl = '',
        imageUrl = ''
    }: UpsertItemParams): Promise<LastItem> {

        return this.prisma.upsert({
            where: {
                id
            },
            update: {
                description,
                lastUsed,
                type,
                backgroundUrl,
                imageUrl
            },
            create: {
                id,
                description,
                lastUsed,
                type,
                backgroundUrl,
                imageUrl
            }
        })
    }
}