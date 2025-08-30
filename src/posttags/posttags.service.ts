import { Injectable } from '@nestjs/common';
import { CreatePosttagDto } from './dto/create-posttag.dto';
import { UpdatePosttagDto } from './dto/update-posttag.dto';
import { PrismaService } from 'src/prisma.service';
@Injectable()
export class PosttagsService {
      constructor(private prisma: PrismaService) {}
  async create(createPosttagDto: CreatePosttagDto,id: number) {
        const a=await this.prisma.post_tag.findMany({where:{postid:id,
          tagid:createPosttagDto.tagid}})
      if (JSON.stringify(a)==="[]"){
      await this.prisma.post_tag.create({data:{
          postid:id,
          tagid:createPosttagDto.tagid
    }})
    return "Başarılı.";
  }  else {return "Bu gönderiye bu etiket eklidir.Tekrar eklemene gerek yoktur."}



  }


  async remove(createPosttagDto: CreatePosttagDto,id: number) {

    if (createPosttagDto!==undefined){
    const a =await this.prisma.post_tag.findMany({where:{
      postid:id,tagid:createPosttagDto.tagid
    }}).then();
    if (JSON.stringify(a)!=="[]"){
        await this.prisma.post_tag.deleteMany({where:{postid:id,tagid:createPosttagDto.tagid}}); return "Silindi."
    }else{return "Kayıt Yoktur veya Alanlar tam doldurulmalıdır."}
    } else {
          const a =await this.prisma.post_tag.findMany({where:{
      postid:id
    }}).then();
    if (JSON.stringify(a)!=="[]"){
        await this.prisma.post_tag.deleteMany({where:{postid:id}}); return "Silindi(Gönderiye ait bütün etiketler silinmiştir)."
    }else{return "Kayıt Yoktur veya Alanlar tam doldurulmalıdır."}
    }


  }
/* 
  findAll() {
    return `This action returns all posttags`;
  }

  findOne(id: number) {
    return `This action returns a #${id} posttag`;
  }

  update(id: number, updatePosttagDto: UpdatePosttagDto) {
    return `This action updates a #${id} posttag`;
  } */

}
