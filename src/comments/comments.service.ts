import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CommentsService {
    constructor(private prisma: PrismaService) {}
  async create(createCommentDto: CreateCommentDto) {
    const now = new Date();
    now.setHours(now.getHours() +3);
    const a=await this.prisma.comment.findMany({where:{commentid:createCommentDto.commentid}})
      if (JSON.stringify(a)==="[]"){
      await this.prisma.comment.create({data:{
       commentid :createCommentDto.commentid,
      commenter_name:createCommentDto.commenter_name,
      created_at:now,
      content:createCommentDto.content,
      postid:createCommentDto.postid
    }})
    return "Başarılı.";
  }  else {return "Bu ID kayıtlıdır"}
  }

  async findAll(post:number, commenter:string) {
    let postid:number;
    if (post!==undefined){
      postid=parseInt(post.toString())
    }else {postid=undefined!}

     const a =await this.prisma.comment.findMany({where:{postid:postid,commenter_name:commenter}});
    if (JSON.stringify(a)!=="[]"){
      return a 
    }else{return "Kayıt Yoktur."}  

  }

  async findOne(id: number) {
      const a =await this.prisma.comment.findMany({where:{
      commentid:id
    }}).then();
    if (JSON.stringify(a)!=="[]"){
      return a 
    }else{return "Kayıt Yoktur."}
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    const a =await this.prisma.comment.findMany({where:{
      commentid:id
    }}).then();
    const b =await this.prisma.comment.findMany({where:{
      commentid:updateCommentDto.commentid
    }}).then();
    
    if (JSON.stringify(a)!=="[]"&&JSON.stringify(b)==="[]"){
        await this.prisma.comment.update({where:{commentid:id},data:{
       commentid :updateCommentDto.commentid,
      commenter_name:updateCommentDto.commenter_name,
      created_at:updateCommentDto.created_at,
      content:updateCommentDto.content,
      postid:updateCommentDto.postid
      }}); return "Güncellendi."
    }else{return "Kayıt Yoktur veya Alanlar tam doldurulmalıdır."}
  }

  async remove(id: number) {
    const a =await this.prisma.comment.findMany({where:{
      commentid:id
    }}).then();
    if (JSON.stringify(a)!=="[]"){
        await this.prisma.comment.delete({where:{commentid:id}}); return "Silindi."
    }else{return "Kayıt Yoktur veya Alanlar tam doldurulmalıdır."}
  }
}
