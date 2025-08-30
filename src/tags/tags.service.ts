import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TagsService {
  constructor(private prisma: PrismaService) {}
  async create(createTagDto: CreateTagDto) {
    const a=await this.prisma.tag.findMany({where:{tagid:createTagDto.tagid}})
      if (JSON.stringify(a)==="[]"){
      await this.prisma.tag.create({data:{
                  tagid:createTagDto.tagid,
                  name:createTagDto.name
    }})
    return "Başarılı.";
  }  else {return "Bu ID kayıtlıdır"}
  }

  async findAll() {
     const a =await this.prisma.tag.findMany();
    if (JSON.stringify(a)!=="[]"){
      return a 
    }else{return "Kayıt Yoktur."} 
  }

  async findOne(id: number) {
     const a =await this.prisma.tag.findMany({where:{tagid:id}});
    if (JSON.stringify(a)!=="[]"){
      return a 
    }else{return "Kayıt Yoktur."} 
  }

  async update(id: number, updateTagDto: UpdateTagDto) {
    const a =await this.prisma.tag.findMany({where:{
      tagid:id
    }}).then();
    const b =await this.prisma.tag.findMany({where:{
      tagid:updateTagDto.tagid
    }}).then();
    
    if (JSON.stringify(a)!=="[]"&&JSON.stringify(b)==="[]"||JSON.stringify(a)===JSON.stringify(b)){
        await this.prisma.tag.update({where:{tagid:id},data:{
            tagid:updateTagDto.tagid,
            name:updateTagDto.name
      }}); return "Güncellendi."
    }else{return "Kayıt Yoktur veya Alanlar tam doldurulmalıdır."}
  }

  async remove(id: number) {
    const a =await this.prisma.tag.findMany({where:{
      tagid:id
    }}).then();
    if (JSON.stringify(a)!=="[]"){
        await this.prisma.tag.delete({where:{tagid:id}}); return "Silindi."
    }else{return "Kayıt Yoktur veya Alanlar tam doldurulmalıdır."}
  }
}
