import { prisma } from "../../prisma";

export default {
  users: async (
    _ = null,
    {
      where,
      take,
      from,
      sort,
    }: { where: any; take: number; from: string; sort: any },
    { req, res, id }: { req: any; res: any; id: string }
  ) => {
    return await prisma.user.findMany({
      where: {
        ...where,
      },
      take,
      cursor: from ? { id: from } : undefined,
      orderBy: sort,
      include: {
        profilePicture: true,
      },
    });
  },
  recipes: async (
    _ = null,
    {
      where,
      take,
      from,
      sort,
    }: { where: any; take: number; from: string; sort: any },
    { req, res, id }: { req: any; res: any; id: string }
  ) => {
    return await prisma.recipe.findMany({
      where: {
        ...where,
      },
      take,
      cursor: from ? { id: from } : undefined,
      orderBy: sort,
      include: {
        image: true,
        author: true,
      },
    });
  },
  steps: async (
    _ = null,
    {
      where,
      take,
      from,
      sort,
    }: { where: any; take: number; from: string; sort: any },
    { req, res, id }: { req: any; res: any; id: string }
  ) => {
    return await prisma.step.findMany({
      where: {
        ...where,
      },
      take,
      cursor: from ? { id: from } : undefined,
      orderBy: sort,
      include: {
        image: true,
        recipe: true,
      },
    });
  },
  ingredients: async (
    _ = null,
    {
      where,
      take,
      from,
      sort,
    }: { where: any; take: number; from: string; sort: any },
    { req, res, id }: { req: any; res: any; id: string }
  ) => {
    return await prisma.ingredient.findMany({
      where: {
        ...where,
      },
      take,
      cursor: from ? { id: from } : undefined,
      orderBy: sort,
      include: {
        recipe: true,
      },
    });
  },
};
