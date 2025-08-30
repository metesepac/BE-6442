import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from '../prisma.service';
@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const now = new Date();
    now.setHours(now.getHours() +3);
    const a=await this.prisma.category.findMany({where:{categoryid:createCategoryDto.categoryid}})
      if (JSON.stringify(a)==="[]"){
      await this.prisma.category.create({data:{
      categoryid:createCategoryDto.categoryid,
      name:createCategoryDto.name,
      created_at:now
    }})
    return "Başarılı.";
  }  else {return "Bu ID kayıtlıdır"}
  }

  async findAll(queryparam:string) {
    switch (queryparam) {
      case undefined:
            const a =await this.prisma.category.findMany({where:{deleted_at:null}});
            if (JSON.stringify(a)!=="[]"){
              return a 
            }else{return "Kayıt Yoktur."}        
        break;
      case "true":
            const b =await this.prisma.category.findMany({});
            if (JSON.stringify(b)!=="[]"){
              return b
            }else{return "Kayıt Yoktur."}         
        break;
      case "false":
            const c =await this.prisma.category.findMany({where:{deleted_at:null}});
            if (JSON.stringify(c)!=="[]"){
              return c
            }else{return "Kayıt Yoktur."}          
        break;  
      case "onlyDeleted":
            const d =await this.prisma.category.findMany({where:{NOT:{deleted_at:null}}});
            if (JSON.stringify(d)!=="[]"){
              return d
            }else{return "Kayıt Yoktur."}            
        break;                        
      default:
        break;
    }

  }

  async findOne(id: number) {
    const a =await this.prisma.category.findMany({where:{
      categoryid:id,deleted_at:null!
    }}).then();
    if (JSON.stringify(a)!=="[]"){
      return a 
    }else{return "Kayıt Yoktur."}
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const a =await this.prisma.category.findMany({where:{
      categoryid:id,deleted_at:null!
    }}).then();
    const b =await this.prisma.category.findMany({where:{
      categoryid:updateCategoryDto.categoryid
    }}).then();
    
    if (JSON.stringify(a)!=="[]"&&JSON.stringify(b)==="[]"){
        await this.prisma.category.update({where:{categoryid:id,deleted_at:null!},data:{
        categoryid:updateCategoryDto.categoryid,
        name:updateCategoryDto.name,
        created_at:updateCategoryDto.created_at
      }}); return "Güncellendi."
    }else{return "Kayıt Yoktur veya Alanlar tam doldurulmalıdır."}
  }

  async remove(id: number) {
    const a =await this.prisma.category.findMany({where:{
      categoryid:id
    }}).then();
    const now = new Date();
    now.setHours(now.getHours() +3);
    if (JSON.stringify(a)!=="[]"){
        await this.prisma.category.update({where:{categoryid:id},data:{
       deleted_at:now
      }}); return "Silindi."
    }else{return "Kayıt Yoktur veya Alanlar tam doldurulmalıdır."}
  }
}
