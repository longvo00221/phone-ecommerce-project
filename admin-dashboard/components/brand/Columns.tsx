"use client"

import {ColumnDef} from "@tanstack/react-table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Copy, Edit, MoreHorizontal, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import AlertModal from "../modals/alertModal";
import privateClient from "@/api/config/private.client";

export type BrandColumn = {
    id:number;
    stt:number;
    name:string;
    banner:string;
}

export const Columns: ColumnDef<BrandColumn>[] = [
    {
        accessorKey:"stt",
        header:"Id"
    },
    {
        accessorKey:"name",
        header:"Name"
    },
    {
        accessorKey:"banner",
        header:"Banner"
    },
    {
        id:"actions",
        cell:({row})=> <CellAction data={row.original} />
    }
]

interface ICellAction {
    data: BrandColumn
}

export const CellAction = ({data}:ICellAction) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const params = useParams();
    const onCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        toast.success("Brand ID copied.");
    }

    const onDelete = async () => {
        try {
          setIsLoading(true);

          await privateClient.delete(`brand/delete-brand/${data.id}`);
          window.location.reload()
          toast.success("Brand deleted!");
        } catch (error) {
          toast.error("You can't delete brand");
        } finally {
          setIsLoading(false);
          setIsOpen(false);
        }
      };
      const brandId = data?.id?.toString()
      return (
        <>
        <AlertModal isLoading={isLoading} isOpen={isOpen} onClose={()=>setIsOpen(false)} onConfirm={onDelete}/>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost"  className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-5 w-5 "/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                    actions
                </DropdownMenuLabel>
                <DropdownMenuItem onClick={()=>router.push(`/brand/${data.id}`)} className="cursor-pointer">
                    <Edit className="mr-2 h-4 w-4" />
                    Update
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" onClick={()=>onCopy(brandId)}>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy ID
                </DropdownMenuItem>
                <DropdownMenuItem onClick={()=>setIsOpen(true)} className="cursor-pointer">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        </>
    )

}